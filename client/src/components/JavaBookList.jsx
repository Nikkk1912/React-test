import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function JavaBookList({ books, onBookClick }) {
    return (
        <Row>
            {books.map((book) => (
                <Col key={book.id} md={3} className="mb-3">
                    <Card className="java-book-card" onClick={() => onBookClick(book.id)} style={{ cursor: "pointer" }}>
                        <Card.Img className="img"
                            variant="top"
                            src={`http://localhost:8080/images/${book.coverImageFile}`}
                            alt={book.title}
                        />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>
                                <strong>Price:</strong> ${book.price.toFixed(2)}
                                <br />
                                <strong>Stock:</strong> {book.stock}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default JavaBookList;
