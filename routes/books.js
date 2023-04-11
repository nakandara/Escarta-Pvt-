const express = require("express");
const auth = require("../middleware/auth")
const booksRouter = express.Router();
const BookControolers = require("../controllers/BookControlers")

booksRouter
    .use(auth)
    .route("/")
    .get(BookControolers.index)
    .post(BookControolers.store);

booksRouter
    .route("/:id")
    .get(BookControolers.show)
    .patch(BookControolers.update)

    .delete(BookControolers.delete);

module.exports = booksRouter;
