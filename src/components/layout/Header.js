import React from 'react';
import { Link } from "react-router-dom";
function Header() {
  return(
    <header style={headerstyle}>
    
    <h1>TODOLIST</h1>
    <Link style={linkstyle} to="/">HOME</Link>
    <Link style={linkstyle} to="/Abt">ABOUT</Link>

    </header>
  )
}
const headerstyle={
  background:'#333',
  color:'#fff',
  textAlign:'center',
  padding:'10px',
  fontFamily:'fantasy',
  letterSpacing:'3px'
}
const linkstyle={
  color:'#fff',
  fontSize:'25px',
  padding:'10px',
  textDecoration:'none'

}
export default Header;