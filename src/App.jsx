import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Contact from './pages/Contact'
import About from './pages/About'
import Domain from './pages/Domain'
import Hosting from './pages/Hosting'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = ['/auth'].includes(location.pathname)
  return (
    <div>
      {!hideHeaderFooter && <Navbar/>  }
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/hosting' element={<Hosting/>}/>
            <Route path='/domain' element={<Domain/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/auth' element={<Auth/>}/>
            
        </Routes>
         {!hideHeaderFooter && <Footer/>  }
    </div>
  )
}

export default App