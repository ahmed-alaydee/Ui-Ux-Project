import React from 'react'
import "../Components/Navbar.css"
import { Link } from 'react-router-dom'
import logo from   "../assets/GPT-3.png"
import "../Components/Navbar.css"

const Navbar = () => {
  return (
    <>
       <div className=' container mt-3 '>
       <nav className="navbar Nav_bar navbar-expand-lg navbar-light ">
  <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
  <button className="navbar-toggler bg-danger" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>

      <li className="nav-item">
        <Link  className="nav-link text-white" to="/Gpt">What is GPT?</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white ">Open AI</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white ">Case Studies</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link text-white ">Library</Link>
      </li>
    </ul>

    <div className='darck_mood_and_light'>
    <i class="fa-solid fa-moon" id='icon'></i>
    </div>

    <form className="form-inline my-2 my-lg-0">
 <Link to="/" className="btn bg-danger text-white m-1 my-2 my-sm-0" type="submit">back to Getstart</Link> 
          <Link to="/signin" className="btn  bg-danger my-2 my-sm-0 text-white" type="submit">Sign in </Link>
    </form>
  </div>
</nav>
      
    </div>
    </>
 
  )
}

export default Navbar
