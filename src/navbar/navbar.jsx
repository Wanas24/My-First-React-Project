import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return <>
        <nav className="navbar navbar-expand-lg nav">
  <div className="container navcomp">
    <Link className="navbar-brand" to={'/'}>START REACT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " to={'port'}>Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'about'}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'con'} >Contact</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

      </>
    
  }
}