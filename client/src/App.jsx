import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import SimpleBooksPage from "./pages/SimpleBooksPage";
import JavaBooksPage from "./pages/JavaBooksPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UsersPage />} />
                <Route path="" element={<UsersPage />} />
                <Route path="/simple-books" element={<SimpleBooksPage />} />
                <Route path="/java-books" element={<JavaBooksPage />} />
            </Routes>
        </Router>
    );
}

export default App;