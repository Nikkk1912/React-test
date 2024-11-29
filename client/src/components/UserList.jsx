import { Card } from "react-bootstrap";

function UserList({ users, selectedUser, selectUser }) {
    return (
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
            {users.map((user) => (
                <Card
                    className="mb-3"
                    key={user._id}
                    onClick={() => selectUser(user)}
                    style={{
                        backgroundColor: selectedUser && selectedUser._id === user._id ? "#d3d3d3" : "white",
                        cursor: "pointer",
                    }}
                >
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>
                            <strong>Age:</strong> {user.age}<br />
                            <strong>Username:</strong> {user.userName}<br />
                            <strong>Email:</strong> {user.email}<br />
                            <strong>Surname:</strong> {user.surname}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default UserList;