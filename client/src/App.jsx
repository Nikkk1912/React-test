import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import SimpleBooksPage from "./pages/SimpleBooksPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UsersPage />} />
                <Route path="" element={<UsersPage />} />
                <Route path="/simple-books" element={<SimpleBooksPage />} />
            </Routes>
        </Router>
    );
}

export default App;