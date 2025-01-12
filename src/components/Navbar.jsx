import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({title,searchNews, setsearchNews}) => {

  const [svalue, setsvalue] = useState("")

const handleOnChange = (e) =>{
setsvalue(e.target.value)
}
const handleOnClick = () =>{
  setsearchNews({
    ...searchNews, // Copy the old fields
    squery: svalue, // But override this one
  });
  
}


  return (
<>

<nav className="navbar sticky-top bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">{title}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={(e) =>{return e.isActive?"active-nav nav-link text-white":" nav-link"}} aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e) =>{return e.isActive?"active-nav nav-link text-white":"nav-link"}}to="/entertainment">Entertainment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e) =>{return e.isActive?"active-nav nav-link text-white":"nav-link"}}to="/business">Business</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e) =>{return e.isActive?"active-nav nav-link text-white":"nav-link"}}to="/health">Health</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e) =>{return e.isActive?"active-nav nav-link text-white":"nav-link"}}to="/sports">Sports</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e) =>{return e.isActive?"active-nav nav-link text-white":"nav-link"}}to="/science">Science</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e) =>{return e.isActive?"active-nav nav-link text-white":"nav-link"}}to="/technology">Technology</NavLink>
        </li>
      </ul>
      <div className="d-flex" role="search">
        <input value={svalue} onChange={handleOnChange} className="form-control me-2" type="text" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" onClick={handleOnClick}>Search</button>
      </div>
    </div>
  </div>
</nav>

</>
  )
}

export default Navbar
