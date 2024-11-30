const { postgres } = require('../db/postgres');

async function getBookById(bookId) {
    const query = 'SELECT * FROM books WHERE id = $1';
    const values = [bookId];

    try {
        const result = await postgres.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error('Error fetching book:', err);
        throw err;
    }
}

async function getAllBooks() {
    const query = 'SELECT * FROM books';

    try {
        const result = await postgres.query(query);
        return result.rows;
    } catch (err) {
        console.error('Error fetching book:', err);
        throw err;
    }
}

async function createBook(bookTitle, bookPrice, bookStock, bookCover) {
    const query = 'INSERT INTO books (title, price, stock, "cover-file-name") VALUES ($1, $2, $3, $4)';
    const values = [bookTitle, bookPrice, bookStock, bookCover];

    try {
        const result = await postgres.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error('Error creating book:', err);
        throw err;
    }
}

async function updateBook(bookId, bookTitle, bookPrice, bookStock, bookCover) {
    const query = 'UPDATE books SET title = $1, price = $2, stock = $3, "cover-file-name" = $4 WHERE id = $5';
    const values = [bookTitle, bookPrice, bookStock, bookCover, bookId];

    try {
        const result = await postgres.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error('Error creating book:', err);
        throw err;
    }
}

async function deleteBook(bookId) {
    const query = 'DELETE FROM books WHERE id = $1';
    const values = [bookId];

    try {
        const result = await postgres.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error('Error deleting book: ', err);
        throw err;
    }
}

module.exports = { getBookById, getAllBooks, createBook, updateBook, deleteBook};

