import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Email from "./pages/Email";
import ErrorPage from "./pages/ErrorPage";

import './App.css'

const App = () => {
    return (
        //basename for Refresh issue
        <Router basename='/portfolio'>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/portfolio" element={<Main />} />
                <Route path="/Email" element={<Email />} />
                {/* has to be last to add for error* */}
                <Route path ="*" element={<ErrorPage/>}/>
            </Routes>
        </Router>
    )
}

export default App
