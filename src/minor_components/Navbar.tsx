// import { useState } from 'react'
import { NavLink } from "react-router-dom";

const links = [
  { name: 'Explore', href: '/' },
  { name: 'Tags', href: '/tags'},
  { name: 'Artists', href: '/artists'}
];

export default function Navbar(){
  //get logged user
  const user = "ludi"

  return(
    <nav className="navbar">
      <div>
        <NavLink to={`/`}>
          <button className="navbtn navlogo" style={{paddingRight: "1.7rem"}}>
            <span className="material-icons">beenhere</span>
            PINBOORU
          </button>
        </NavLink>
        {links.map((link) => {
          return (
            <NavLink to={link.href} key={link.name} 
              className={({ isActive }) => 
                isActive ? "navbtn-active" : ""
              }
            >
              <button className="navbtn">{link.name}</button>
            </NavLink>
          )
        })}
      </div>
      <div>
        { user ?
          <NavLink to={`${user}/collection`} style={{display: "flex"}}>
            <button className="navbtn">
              <span className="material-icons">collections_bookmark</span>
              My Collection
            </button>
          </NavLink>
          : 
          <NavLink to="/login">
            <button className="navbtn">Log In</button>
          </NavLink>
        }
      </div>
    </nav>
  )
}