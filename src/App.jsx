import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import FirstBox from "./components/FirstBox";
import SecondBox from "./components/SecondBox";
import Leak from "./components/Leak";
import Ideas from "./components/Ideas";
import HeatMap from "./components/Heatmap";

const Dashboard = () => (
    <>
        <FirstBox />
        <SecondBox />
        <Leak />
        <Ideas />
    </>
);

const HeatMapPage = () => (
    <div className="user-box fifth-box">
        <HeatMap />
    </div>
);

const App = () => (
    <Router>
        <div className="wrapper">
            <Sidebar />
            <div className="main-container">
                <Header />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/heatmap" element={<HeatMapPage />} />
                    {/* Add other routes as needed */}
                </Routes>
            </div>
        </div>
    </Router>
);

export default App;
