import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../Routers/Routers'
function Layout() {
  return (
    
    <Router>
        
            <Header/>
            <div>
                <Routers/>
            </div>
            <Footer/>
        
    </Router>
  )
}

export default Layout
