import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import {Container, Row, Col, Card, Button, Form, Navbar} from "react-bootstrap";
import Axios from "axios";

function App() {
    // States
    const [listOfUsers, setListOfUsers] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [surname, setSurname] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        updateUserList();
    }, []);

    const selectUser = (user) => {
        setSelectedUser(user);
        setName(user.name);
        setAge(user.age);
        setUserName(user.userName);
        setEmail(user.email);
        setSurname(user.surname);
    };

    const clearForm = () => {
        setSelectedUser(null);
        setName("");
        setAge(0);
        setUserName("");
        setEmail("");
        setSurname("");
    };

    const updateUserList = () => {
        Axios.get("http://localhost:3001/api/users").then((response) => {
            setListOfUsers(response.data);
        });
    };

    const createUser = () => {
        Axios.post("http://localhost:3001/api/users", {
            name: name,
            age: age,
            userName: userName,
            email: email,
            surname: surname
        }).then(() => {
            alert("Made new user for u");
            updateUserList();
            clearForm();
        });
    };

    const updateUser = () => {
        if (!selectedUser) {
            alert("Please select a user to update.");
            return;
        }
        Axios.put(`http://localhost:3001/api/users/${selectedUser._id}`, {
            name,
            age,
            userName,
            email,
            surname
        }).then(() => {
            alert("User updated successfully!");
            updateUserList();
            clearForm();
        });
    };

    const deleteUser = () => {
        if (!selectedUser) {
            alert("Please select a user to delete.");
            return;
        }
        Axios.delete(`http://localhost:3001/api/users/${selectedUser._id}`).then(() => {
            alert("User deleted successfully!");
            updateUserList();
            clearForm();
        });
    }

    return (
        <div>
            <Navbar className="navbar" bg="light" variant="light" expand="lg">
                <Navbar.Brand className="mx-auto" href="#">User Management</Navbar.Brand>
            </Navbar>

            <Container className="mt-4 container">
                <Row>
                    {/* User List */}
                    <Col md={7}>
                        <h4>User List</h4>
                        <div style={{maxHeight: "400px", overflowY: "auto"}}>
                            {listOfUsers.map((user) => (
                                <Card
                                    className="mb-3"
                                    key={user._id}
                                    onClick={() => selectUser(user)}
                                    style={{
                                        backgroundColor: selectedUser && selectedUser._id === user._id ? "#b2b1b1" : "white",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Card.Body>
                                        <Card.Title>{user.name}</Card.Title>
                                        <Card.Text>
                                            {/*<strong>Id:</strong> {user._id}<br/>*/}
                                            <strong>Age:</strong> {user.age}<br/>
                                            <strong>Username:</strong> {user.userName}<br/>
                                            <strong>Email:</strong> {user.email}<br/>
                                            <strong>Surname:</strong> {user.surname}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </Col>

                    {/* Selected User Form */}
                    <Col md={5}>
                        <h4>{selectedUser ? "Update User" : "Create User"}</h4>
                        <Form className="form">
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control className="form-control"
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
