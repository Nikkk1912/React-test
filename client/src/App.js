import './App.css';
import {useState, useEffect} from "react";
import Axios from "axios";

function App() {
    // States
    const [listOfUsers, setListOfUsers] = useState([]);
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [userName, setUserName] = useState("")

    useEffect(() => {
        Axios.get("http://localhost:3001/api/users").then((response) => {
            setListOfUsers(response.data);
        });
    }, []);

    const createUser = () => {
        Axios.post("http://localhost:3001/api/users", {
            name: name,
            age: age,
            userName: userName,
        }).then((response) => {
            alert("Made new user for u");
        });
    };

    return (
        <div className="App">
            <div className="userDisplay">
                {listOfUsers.map((user) => {
                    return (
                        <div>
                            <h1>Name: {user.name}</h1>
                            <h1>Age: {user.age}</h1>
                            <h1>Username: {user.userName}</h1>
                        </div>
                    );
                })}
            </div>

            <div className="UserCreate">
                <input type="text" placeholder="Name ..." onChange={(event) =>{setName(event.target.value);}}/>
                <input type="number" placeholder="Age ..." onChange={(event) =>{setAge(event.target.value);}}/>
                <input type="text" placeholder="Username ..." onChange={(event) =>{setUserName(event.target.value);}}/>
                <button onClick={createUser}>Create User</button>
            </div>

        </div>
    );
}

export default App;
