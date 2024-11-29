import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Axios from "axios";
import NavbarComponent from "../components/Navbar";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

function UsersPage() {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [surname, setSurname] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        updateUserList();
    }, []);

    const updateUserList = () => {
        Axios.get("http://localhost:3001/api/users").then((response) => {
            setListOfUsers(response.data);
        });
    };

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

    const createUser = () => {
        Axios.post("http://localhost:3001/api/users", { name, age, userName, email, surname }).then(() => {
            //alert("Made new user for u");
            updateUserList();
            clearForm();
        });
    };

    const updateUser = () => {
        if (!selectedUser) {
            //alert("Please select a user to update.");
            return;
        }
        Axios.put(`http://localhost:3001/api/users/${selectedUser._id}`, { name, age, userName, email, surname }).then(() => {
            //alert("User updated successfully!");
            updateUserList();
            clearForm();
        });
    };

    const deleteUser = () => {
        if (!selectedUser) {
            //alert("Please select a user to delete.");
            return;
        }
        Axios.delete(`http://localhost:3001/api/users/${selectedUser._id}`).then(() => {
            //alert("User deleted successfully!");
            updateUserList();
            clearForm();
        });
    };

    return (
        <div>
            <NavbarComponent />
            <Container className="mt-4 container">
                <Row>
                    <Col md={7}>
                        <h4>User List</h4>
                        <UserList users={listOfUsers} selectedUser={selectedUser} selectUser={selectUser} />
                    </Col>
                    <Col md={5}>
                        <UserForm
                            name={name}
                            setName={setName}
                            age={age}
                            setAge={setAge}
                            userName={userName}
                            setUserName={setUserName}
                            email={email}
                            setEmail={setEmail}
                            surname={surname}
                            setSurname={setSurname}
                            selectedUser={selectedUser}
                            createUser={createUser}
                            updateUser={updateUser}
                            deleteUser={deleteUser}
                            clearForm={clearForm}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default UsersPage;
