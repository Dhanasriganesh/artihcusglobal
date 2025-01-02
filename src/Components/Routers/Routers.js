// src/Routes/Router.js
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Career from '../Abouttypes/Career';
import Events from '../Abouttypes/Events';
import Blogs from '../Abouttypes/Blogs';
import Newscenter from '../Abouttypes/Newscenter';
import Manufacturing from '../Indtypes/Manufacturing';
import Pharma from '../Indtypes/Pharma';
import Fashion from "../Indtypes/Fashion";
import Fmcg from '../Indtypes/Fmcg';
import Threepl from "../Indtypes/Threepl";
import Ecomm from "../Indtypes/Ecomm";
import Automotive from "../Indtypes/Automotive";
import Food from "../Indtypes/Food";
import Btp from "../SAPModules/Btp";
import Ewm from "../SAPModules/Ewm";
import Mfs from "../SAPModules/Mfs";
import Tm from "../SAPModules/Tm";
import Yl from "../SAPModules/Yl";
import Admin from '../pages/Admin';
import Upload from '../pages/Upload';
import CkReddy from '../pages/CkReddy';
import SurendraG from '../pages/SurendraG';
import NaraReddy from '../pages/NaraReddy';
import SyamaReddy from '../pages/SymaReddy';
import HariReddy  from '../pages/HariReddy';
import BhanuReddy from '../pages/BhanuReddy';
import SudhakarA from '../pages/SudhakarA';
import VenkatT from '../pages/VenkatT';
import KalyanN from '../pages/KalyanN';
// Protected Route Component
const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('adminLoggedIn') === 'true';
    
    if (!isAuthenticated) {
        return <Navigate to="/admin" replace />;
    }
    
    return children;
};

function Routers() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          
            
            {/* About Section Routes */}
            <Route path="/about/careers" element={<Career />} />
            <Route path="/about/events" element={<Events />} />
            <Route path="/about/blogs" element={<Blogs />} />
            <Route path="/about/news" element={<Newscenter/>} />
            
            {/* Industries Routes */}
            <Route path="/industries/manufacturing" element={<Manufacturing/>}/>
            <Route path="/industries/pharmaceutical" element={<Pharma/>}/>
            <Route path="/industries/fashion-&-retail" element={<Fashion/>}/>
            <Route path="/industries/fmcg" element={<Fmcg/>}/>
            <Route path="/industries/3pl" element={<Threepl/>}/>
            <Route path="/industries/e-commerce" element={<Ecomm/>}/>
            <Route path="/industries/automotive" element={<Automotive />} />
            <Route path="/industries/food-&-beverage" element={<Food/>} />
            
            {/* SAP Modules Routes */}
            <Route path="/sap-modules/sap-btp" element={<Btp />} />
            <Route path="/sap-modules/sap-yl" element={<Yl />} />
            <Route path="/sap-modules/sap-tm" element={<Tm />} />
            <Route path="/sap-modules/sap-mfs" element={<Mfs />} />
            <Route path="/sap-modules/sap-ewm" element={<Ewm />} />
            
{/*Leaders*/}
<Route path="/profile/nara-reddy" element={<NaraReddy />} />
            <Route path="/profile/syama-reddy" element={<SyamaReddy />} />
            <Route path="/profile/hari-reddy" element={<HariReddy />} />
            <Route path="/profile/surendra-gondipalli" element={<SurendraG />} />
            <Route path="/profile/bhanu-reddy" element={<BhanuReddy />} />
            <Route path="/profile/sudhakar-amirapu" element={<SudhakarA />} />
            <Route path="/profile/venkat-tangirala" element={<VenkatT />} />
            <Route path="/profile/kalyan-nese" element={<KalyanN />} />
            <Route path="/profile/ck-reddy" element={<CkReddy />} />


            {/* Admin Routes */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/upload" element={
                <ProtectedRoute>
                    <Upload />
                </ProtectedRoute>
            } />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default Routers;