const { Router } = require("express");
const {
  allBooks,
  createBook,
  deleteBook,
  updateBook,
} = require("../controllers");
const router = Router();

// @route  GET api/book + /allBooks
// @desc   get all books
router.get("/allBooks", allBooks);

// @route  POST api/book + /createBook
// @desc   add Book
router.post("/createBook", createBook);

// @route  DELETE api/book + /deleteBook
// @desc   add Book
router.delete("/deleteBook/:id", deleteBook);

// @route  PUT api/book + /updateBook
// @desc   add Book
router.put("/updateBook/:id", updateBook);

module.exports = router;
