import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Axios from "axios";
import NavbarComponent from "../components/Navbar";
import SimpleBookList from "../components/SimpleBookList";
import SimpleBookForm from "../components/SimpleBookForm";
import SimpleBookImg from "../components/SimpleBookImg";

function SimpleBookPage() {
    const [listOfBooks, setListOfBooks] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [bookCover, setBookCover] = useState("");
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        updateBookList();
    }, []);

    const updateBookList = () => {
        Axios.get("http://localhost:3001/api/books").then((response) => {
            setListOfBooks(response.data);
        });
    };

    const selectBook = (book) => {
        setSelectedBook(book);
        setTitle(book.title);
        setPrice(book.price);
        setStock(book.stock);
        setBookCover(book["cover-file-name"]);
    };

    const clearForm = () => {
        setSelectedBook(null);
        setTitle("");
        setPrice("");
        setStock("");
        setBookCover("");
    };

    const createBook = () => {
        Axios.post("http://localhost:3001/api/books", { title, price, stock, bookCover }).then(() => {
            //alert("Made new book for u");
            updateBookList();
            clearForm();
        });
    };

    const updateBook = () => {
        if (!selectedBook) {
            //alert("Please select a book to update.");
            return;
        }
        Axios.put(`http://localhost:3001/api/books/${selectedBook.id}`, { title, price, stock, bookCover }).then(() => {
            //alert("Book updated successfully!");
            updateBookList();
            clearForm();
        });
    };

    const deleteBook = () => {
        if (!selectedBook) {
            //alert("Please select a book to delete.");
            return;
        }
        Axios.delete(`http://localhost:3001/api/books/${selectedBook.id}`).then(() => {
            //alert("Book deleted successfully!");
            updateBookList();
            clearForm();
        });
    };

    return (
        <div>
            <NavbarComponent />
            <Container className="mt-4 container">
                <Row>
                    <Col md={4}>
                        <h4>Books List</h4>
                        <SimpleBookList
                            books={listOfBooks}
                            selectedBook={selectedBook}
                            selectBook={selectBook}
                        />
                    </Col>
                    <Col md={5}>
                        <SimpleBookForm
                            title={title}
                            setTitle={setTitle}
                            price={price}
                            setPrice={setPrice}
                            stock={stock}
                            setStock={setStock}
                            bookCover={bookCover}
                            setBookCover={setBookCover}
                            selectedBook={selectedBook}
                            createBook={createBook}
                            updateBook={updateBook}
                            deleteBook={deleteBook}
                            clearForm={clearForm}
                        />
                    </Col>
                    <Col md={3}>
                        <SimpleBookImg
                            selectedBook={selectedBook}
                            selectBook={selectBook}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SimpleBookPage;
