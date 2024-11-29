import { Button, Form } from "react-bootstrap";

function SimpleBookForm({
                      title,
                      setTitle,
                      price,
                      setPrice,
                      stock,
                      setStock,
                      bookCover,
                      setBookCover,
                      selectedBook,
                      createBook,
                      updateBook,
                      deleteBook,
                      clearForm
                  }) {
    return (
        <>
            <h4>{selectedBook ? "Update Book" : "Create Book"}</h4>
            <Form className="form">
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        placeholder="Enter title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control className="form-control"
                                  type="number"
                                  value={price}
                                  placeholder="Enter price"
                                  onChange={(e) => setPrice(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control className="form-control"
                                  type="number"
                                  value={stock}
                                  placeholder="Enter stock number"
                                  onChange={(e) => setStock(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Book Cover File Name</Form.Label>
                    <Form.Control className="form-control"
                                  type="text"
                                  value={bookCover}
                                  placeholder="Enter book cover name"
                                  onChange={(e) => setBookCover(e.target.value)}
                    />
                </Form.Group>
            </Form>
            <div className="button-container">
                <Button className="m-2" variant="primary" onClick={selectedBook ? updateBook : createBook}>
                    {selectedBook ? "Update Book" : "Create Book"}
                </Button>
                <Button className="m-2" variant="danger" onClick={deleteBook}>
                    Delete Book
                </Button>
                <Button className="m-2" variant="secondary" onClick={clearForm}>
                    Clear Form
                </Button>
            </div>
        </>
    );
}

export default SimpleBookForm;
