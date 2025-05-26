import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import HomePage from "./HomePage/Body.jsx";
import PortfolioPage from "./PortfolioPage/Body.jsx";
import AboutPage from "./AboutPage/Body.jsx";
import ContactPage from "./ContactPage/Body.jsx";
import AdminPage from "./AdminPage/Body.jsx";

const Body = () => {
    return (
        <Router>
          <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
        <Route path="/portfoliopage" element={<PortfolioPage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/adminpage" element={<AdminPage />} />
            </Routes>
          <Footer />
        </Router>
    );
};

export default Body;