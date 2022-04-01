import React,{useState} from 'react'

const Navbar = () => {
const [show, setShow] = useState(false);

  return (
    <>
    <div className='work-container container'>
    <div className='navbar-bg'>
        <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">E-LOGO</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" 
      onClick={()=>setShow(!show)}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${show ? "show" : ""}`} id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">Study</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Admmission</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">Pages</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">Contact</a>
          </li>
        </ul>
        <form className="d-flex">
          <button className="btn " type="submit">Apply Now</button>
          {/* <button className="btn btn-style-b" type="submit">LOG IN</button> */}

        </form>
      </div>
    </div>
  </nav>
  </div>
  </div>
  </>
  )
}

export default Navbar;
