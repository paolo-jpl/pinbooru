// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import ImgPage from './ImgPage';
import ImgCollection from './ImgCollection';
import Navbar from './minor_components/Navbar';
import Sidebar from './minor_components/Sidebar';
import PrivateRoute from './minor_components/PrivateRoute'
import { useLocation } from "react-router-dom";
import './App.css'

function App() {
  const location = useLocation();
  
  return (
    <div className='content'>
      { location.pathname != '/login' ? 
        <>
          <Navbar/>
          <Sidebar/>
        </>
        : <></>
      }
      <Routes>
        <Route path="/" element={<ImgCollection user='user1'/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/post/:id" element={<ImgPage/>}/>
        <Route path="/user" element={<PrivateRoute><ImgCollection user='user1'/></PrivateRoute>}/>
      </Routes>
    </div>
  )
}

export default App
