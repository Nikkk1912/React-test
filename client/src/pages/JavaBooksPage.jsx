import '../App.css';
import React, { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import Axios from "axios";
import Navbar from "../components/Navbar";
import JavaBookList from "../components/JavaBookList";
import JavaBookDetails from "../components/JavaBookDetails";

function JavaBooksPage() {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedBook, setSelectedBook] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    const fetchBooks = async (pageNum) => {
        try {
            const connect = await Axios.post('http://localhost:8080/utils/connectBooks');
            if (connect) console.log("author and books connect");
            const response = await Axios.get(`http://localhost:8080/books/pagination?pageNum=${pageNum}&pageSize=4`);
            setBooks(response.data._embedded.bookResponseDtoList);
            setTotalPages(response.data.page.totalPages);
            setCurrentPage(response.data.page.number);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    const fetchBookDetails = async (bookId) => {
        try {
            const response = await Axios.get(`http://localhost:8080/books/${bookId}`);
            setSelectedBook(response.data);
            setShowDetails(true);
        } catch (error) {
            console.error("Error fetching book details:", error);
        }
    };

    useEffect(() => {
        fetchBooks(currentPage);
    }, [currentPage]);

    const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum);
    };

    return (
        <div>
            <Navbar />
            <Container className="mt-5">
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px", width: "100%" }}>
                        <JavaBookList books={books} onBookClick={fetchBookDetails} />
                        <Pagination className="d-flex justify-content-center mt-3">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <Pagination.Item
                                    key={i}
                                    active={i === currentPage}
                                    onClick={() => handlePageChange(i)}
                                >
                                    {i + 1}
                                </Pagination.Item>
                            ))}
                        </Pagination>
                    </div>
                </div>
            </Container>
            <JavaBookDetails show={showDetails} onHide={() => setShowDetails(false)} book={selectedBook} />
        </div>
    );
}

export default JavaBooksPage;