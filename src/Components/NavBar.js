import React from 'react'
// import {Link} from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

export default function NavBar(props) {
  let mystyle={
    color: "white",
    background: '#39424e'
  }

  return (
    <div >
         <nav className={`navbar navbar-expand-lg fixed-top `} style={props.mode==='Dark'?mystyle: {"background": "linear-gradient(110deg, #762b0b 60%, #bc6939 60%)"}}>
  <div className="container-fluid">
<Link className={`navbar-brand text-light`}  to="/">NewsApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-light`} aria-current="page"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-light`} aria-current="page"  to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className={`nav-link active dropdown-toggle text-light `}  to="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><Link  className="dropdown-item"  to="/business">Business</Link></li>
            <li><Link   className="dropdown-item"  to="/entertainment">Entertainment</Link></li>
            <li><Link   className="dropdown-item"  to="/general">General</Link></li>
            <li><Link   className="dropdown-item"  to="/health">Health</Link></li>
            <li><Link   className="dropdown-item"  to="/science">Science</Link></li>
            <li><Link   className="dropdown-item"  to="/sports">Sports</Link></li>
            <li><Link   className="dropdown-item"  to="/technology">Technology</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-light`} aria-current="page"  to="/ContactUs">Contact Us</Link>
        </li>
        </ul> 
    </div>
    <span>
      <button onClick={props.changeMode} className={`btn btn-${props.mode==='Dark'?'secondary':'dark'} btn-active`}>{props.mode==='Light'?'Dark':'Light'} Mode </button>
    </span>
  </div>
</nav>
<Outlet />
    </div>
  )
}

