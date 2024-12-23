import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App1 = () => (
    <iframe
        src="http://project-explorer.vnrzone.site/"
        style={{ width: "100%", height: "80vh", border: "none" }}
    />
);

const App2 = () => (
    <iframe
        src="http://localhost:5002"
        style={{ width: "100%", height: "80vh", border: "none" }}
    />
);

function App() {
    return (
        <Router>
            <div>
                <h1>Unified Application</h1>
                <nav>
                    <ul>
                        <li><a href="/app3">App 1</a></li>
                        <li><a href="/app4">App 2</a></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/app3" element={<App1 />} />
                    <Route path="/app4" element={<App2 />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;