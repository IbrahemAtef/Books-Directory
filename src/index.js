const express = require("express");
const app = express();
const db_conn = require("./db");
const bookRouter = require("./routers");

// middleware
app.use(express.json({ extended: true }));

// Mysql Database connection
db_conn.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected...");
});

// routes
app.use("/api/book", bookRouter);

// port && listening
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
