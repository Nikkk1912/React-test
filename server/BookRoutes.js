const express = require('express');
const bookModel = require('./models/books');

const endPointPostgres = express.Router();

// GET
endPointPostgres.get('/books/:id', async (req, res) => {
    const bookId = req.params.id;
    try {
        const book = await bookModel.getBookById(bookId);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: "Error getting book", error: error.message });
    }
});

endPointPostgres.get('/books', async (req, res) => {
    try {
        const book = await bookModel.getAllBooks();
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: "Error getting book", error: error.message });
    }
});

// POST
endPointPostgres.post('/books', async (req, res) => {
    const book = req.body;

    try {
        const newBook = await bookModel.createBook(book.title, book.price, book.stock, book.bookCover);
        res.status(200).json(newBook);
    } catch (error) {
        res.status(500).json({ message: "Error creating book", error: error.message });
    }
});

// PUT
endPointPostgres.put('/books/:id', async (req, res) => {
    const bookId = req.params.id;
    const book = req.body;

    try {
        const newBook = await bookModel.updateBook(bookId, book.title, book.price, book.stock, book.bookCover);
        res.status(200).json(newBook);
    } catch (error) {
        res.status(500).json({ message: "Error updating book", error: error.message });
    }
});

// DELETE
endPointPostgres.delete('/books/:id', async (req, res) => {
    const bookId = req.params.id;

    try {
        const deletedBook = await bookModel.deleteBook(bookId);
        res.status(200).json(deletedBook);
    } catch (error) {
        res.status(500).json( { message: "Error deleting book", error: error.message });
    }
});

module.exports = endPointPostgres;