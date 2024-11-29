import {Card} from "react-bootstrap";

function SimpleBookList({books, selectedBook, selectBook}) {
    return (
        <div style={{maxHeight: "400px", overflowY: "auto"}}>
            {books.map((book) => (
                <Card
                    className="mb-3"
                    key={book.id}
                    onClick={() => selectBook(book)}
                    style={{
                        backgroundColor: selectedBook && selectedBook.id === book.id ? "#d3d3d3" : "white",
                        cursor: "pointer",
                    }}
                >
                    <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>
                                <strong>Price:</strong> {book.price}<br/>
                                <strong>Stock:</strong> {book.stock}<br/>
                                <strong>Cover</strong> {book['cover-file-name']}<br/>
                            </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default SimpleBookList;