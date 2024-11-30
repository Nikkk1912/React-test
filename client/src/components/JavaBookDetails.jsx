import React from "react";
import { Modal, Button } from "react-bootstrap";

function JavaBookDetails({ show, onHide, book }) {
    if (!book) return null;

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{book.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="page-img"
                    src={`http://localhost:8080/images/${book.coverImageFile}`}
                    alt={book.title}
                    style={{ width: "100%", marginBottom: "20px" }}
                />
                <p>
                    <strong>Price:</strong> ${book.price.toFixed(2)}
                </p>
                <p>
                    <strong>Stock:</strong> {book.stock}
                </p>
                <p>
                    <strong>Authors:</strong>{" "}
                    {book.authors
                        .map((author) => `${author.fistName} ${author.middleName || ""} ${author.lastName}`)
                        .join(", ")}
                </p>
                <p>
                    <strong>Genres:</strong>{" "}
                    {book.genres.map((genre) => genre.genre).join(", ")}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default JavaBookDetails;
