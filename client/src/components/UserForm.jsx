import { Button, Form } from "react-bootstrap";

function UserForm({
                      name,
                      setName,
                      age,
                      setAge,
                      userName,
                      setUserName,
                      email,
                      setEmail,
                      surname,
                      setSurname,
                      selectedUser,
                      createUser,
                      updateUser,
                      deleteUser,
                      clearForm
                  }) {
    return (
        <>
            <h4>{selectedUser ? "Update User" : "Create User"}</h4>
            <Form className="form">
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        placeholder="Enter name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control className="form-control"
                        type="number"
                        value={age}
                        placeholder="Enter age"
                        onChange={(e) => setAge(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control className="form-control"
                        type="text"
                        value={userName}
                        placeholder="Enter username"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="form-control"
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control className="form-control"
                        type="text"
                        value={surname}
                        placeholder="Enter surname"
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </Form.Group>
            </Form>
            <div className="button-container">
                <Button className="m-2" variant="primary" onClick={selectedUser ? updateUser : createUser}>
                    {selectedUser ? "Update User" : "Create User"}
                </Button>
                <Button className="m-2" variant="danger" onClick={deleteUser}>
                    Delete User
                </Button>
                <Button className="m-2" variant="secondary" onClick={clearForm}>
                    Clear Form
                </Button>
            </div>
        </>
    );
}

export default UserForm;
