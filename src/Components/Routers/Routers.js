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
import Manufacturing from '../Indtypes/Manufacturing';
import Pharma from '../Indtypes/Pharma';
import Fashion from "../Indtypes/Fashion"
import Fmcg from '../Indtypes/Fmcg';
import Threepl from "../Indtypes/Threepl"
import Ecomm from "../Indtypes/Ecomm"
import Automotive from "../Indtypes/Automotive"
import Food from "../Indtypes/Food"
import Btp from "../SAPModules/Btp"
import Ewm from "../SAPModules/Ewm"
import Mfs from "../SAPModules/Mfs"
import Tm from "../SAPModules/Tm"
import Yl from "../SAPModules/Yl"
function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sap-modules" element={<Sapmodules />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/about/careers" element={<Career />} />
            <Route path="/about/events" element={<Events />} />
            <Route path="/about/blogs" element={<Blogs />} />
            <Route path="/about/news" element={<Newscenter/>} />
            <Route path="/industries/manufacturing" element={<Manufacturing/>}/>
        <Route path="/industries/pharmaceutical" element={<Pharma/>}/>
        <Route path="/industries/fashion-&-retail" element={<Fashion/>}/>
        <Route path="/industries/fmcg" element={<Fmcg/>}/>
        <Route path="/industries/3pl" element={<Threepl/>}/>
        <Route path='/industries/e-commerce' element={<Ecomm/>}/>
        <Route path="/industries/automotive" element={<Automotive />} />
        <Route path="/industries/food-&-beverage" element={< Food/>} />
        <Route path="/sap-modules/sap-btp" element={<Btp />} />
        <Route path="/sap-modules/sap-yl" element={<Yl />} />
        <Route path="/sap-modules/sap-tm" element={<Tm />} />
        <Route path="/sap-modules/sap-mfs" element={<Mfs />} />
        <Route path="/sap-modules/sap-ewm" element={<Ewm />} />
        </Routes >
    )
}

export default Routers
