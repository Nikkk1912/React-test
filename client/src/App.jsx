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
    const [birthDay, setBirthDay] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/api/users").then((response) => {
            setListOfUsers(response.data);
        });
    }, []);

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
            birthDay: birthDay
        }).then((response) => {
            alert("Made new user for u");
        });
    };

    return (
        <div>
            {/* React-Bootstrap Navbar */}
            <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand className="mx-auto" href="#">User Management</Navbar.Brand>
            </Navbar>

            {/* Main Content */}
            <Container className="mt-4">
                <Row>
                    {/* User List */}
                    <Col md={6} mg={3}>
                        <h4>User List</h4>
                        <div style={{maxHeight: "400px", overflowY: "auto"}}>
                            {listOfUsers.map((user, index) => (
                                <Card className="mb-3" key={index}>
                                    <Card.Body>
                                        <Card.Title>{user.name}</Card.Title>
                                        <Card.Text>
                                            <strong>Age:</strong> {user.age}<br/>
                                            <strong>Username:</strong> {user.userName}<br/>
                                            <strong>Email:</strong> {user.email}<br/>
                                            <strong>Birthday:</strong> {user.birthDay}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </Col>

                    {/* Form */}
                    <Col md={6}>
                        <h4>Create User</h4>
                        <Form className="form">
                            <Form.Group className="mb-3 form-group">
                                <Form.Label>Name</Form.Label>
                                <Form.Control className="form.control"
                                    type="text"
                                    placeholder="Enter name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 form-group">
                                <Form.Label>Age</Form.Label>
                                <Form.Control className="form.control"
                                    type="number"
                                    placeholder="Enter age"
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 form-group">
                                <Form.Label>Username</Form.Label>
                                <Form.Control className="form.control"
                                    type="text"
                                    placeholder="Enter username"
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 form-group">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className="form.control"
                                    type="email"
                                    placeholder="Enter email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 form-group">
                                <Form.Label>Birthday</Form.Label>
                                <Form.Control className="form.control"
                                    type="date"
                                    onChange={(e) => setBirthDay(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" onClick={updateUserList}>
                            Refresh list
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={createUser}>
                            Create User
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
