const express = require("express");
const router = express.Router();
const BookController = require("../controller/BookController");

router.post("/upload-book", BookController.CreateBook);
router.get("/all-book", BookController.ReadAllBook);
router.get("/read-book-byCategory", BookController.ReadBookByCategory);
router.get("/read-book-byId/:id", BookController.ReadBookById);
router.patch("/update-book/:id", BookController.UpdateBook);
router.delete("/delete-book/:id", BookController.DeleteBook);

module.exports = router;
