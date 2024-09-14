// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import ImgPage from './ImgPage';
import ImgCollection from './ImgCollection';
import Navbar from './minor_components/Navbar';
import PrivateRoute from './minor_components/PrivateRoute'
import { useLocation } from "react-router-dom";
import './App.css'
import UserPage from './UserPage';

function App() {
  const location = useLocation();
  //auth user here ? and pass as prop

  return (
    <div className='content'>
      { location.pathname != '/login' ? 
        <Navbar/> : <></>
      }
      {/* TODO: route handler */}
      <Routes> 
        <Route path="/" element={<ImgCollection/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/post/:id" element={<ImgPage/>}/>
        <Route path="/u/:user" element={<UserPage/>}/>
        <Route path="/u/:user/collection" element={<PrivateRoute><UserPage/></PrivateRoute>}/>
      </Routes>
    </div>
  )
}

export default App
