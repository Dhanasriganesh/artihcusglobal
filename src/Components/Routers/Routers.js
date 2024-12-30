import React from 'react'
import { Routes, Route } from "react-router-dom";
import Services from '../pages/Services';
import Sapmodules from '../pages/Sapmodules';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Industries from '../pages/Industries';
import Career from '../Abouttypes/Career';
import Events from '../Abouttypes/Events';
import Blogs from '../Abouttypes/Blogs';
import Newscenter from '../Abouttypes/Newscenter';

function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sapmodules" element={<Sapmodules />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/career" element={<Career />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/news" element={<Newscenter/>} />

        </Routes >
    )
}

export default Routers
