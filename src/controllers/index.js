const connection = require("../db");

module.exports.allBooks = (req, res) => {
  let sql = "SELECT * FROM book_directory.book";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

module.exports.createBook = (req, res) => {
  const { title, pageCount, authors } = req.body;
  let book = { title, pageCount, authors: JSON.stringify(authors) };
  let sql = "INSERT INTO book_directory.book SET ?";
  connection.query(sql, book, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

module.exports.deleteBook = (req, res) => {
  const { id } = req.params;
  let sql = "DELETE FROM book_directory.book WHERE id = ?";
  connection.query(sql, id, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

module.exports.updateBook = (req, res) => {
  const { id } = req.params;
  let { title, pageCount, authors } = req.body;
  let book = {
    title,
    pageCount,
    authors: authors ? JSON.stringify(authors) : undefined,
  };
  let fields = Object.keys(req.body).join(" = ?,") + " = ?";
  let sql = `update book_directory.book SET ${fields} where id = ?`;
  let arr = [];
  for (const key in book) {
    if (book[key] !== undefined) {
      arr.push(book[key]);
    }
  }
  arr.push(id)
  connection.query(sql, arr, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};
