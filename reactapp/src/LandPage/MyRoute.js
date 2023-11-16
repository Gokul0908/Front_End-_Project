import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandPage from './LandPage'
import ContactComp from './ContactComp'
import About from './About'
import Login from './Login'

class MyRoute extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Routes>
                <Route path='' element={<LandPage/>}></Route>
                <Route path='/contact' element={<ContactComp/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default MyRoute
