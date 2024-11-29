import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import BooksPage from "./pages/BooksPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UsersPage />} />
                <Route path="" element={<UsersPage />} />
                <Route path="/books" element={<BooksPage />} />
            </Routes>
        </Router>
    );
}

export default App;