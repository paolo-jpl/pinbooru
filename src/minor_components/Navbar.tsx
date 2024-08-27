// import { useState } from 'react'
import { NavLink, Link } from "react-router-dom";

const links = [
  { name: 'Explore', href: '/' },
  { name: 'Tags', href: '/tags'}
];

export default function Navbar(){
  //get logged user
  const user = "ludi"

  return(
    <nav className="navbar">
      <div>
        <NavLink to={`/`}>
          <button className="navbtn navlogo">PINBOORU</button>
        </NavLink>
        <NavLink to={`${user}/collection`}>
          <button className="navbtn">My Collection</button>
        </NavLink>
        {links.map((link) => {
          return (
            <NavLink to={link.href} key={link.name}>
              <button className="navbtn">{link.name}</button>
            </NavLink>
          )
        })}
      </div>
      <div>
        <NavLink to="/login">
          <button className="navbtn">Log In</button>
        </NavLink>
      </div>
    </nav>
  )
}