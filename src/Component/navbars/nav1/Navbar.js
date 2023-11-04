import React from 'react'
import "../nav1/nav2.css"
import logo from "../../Images/logo.png"


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg" data-aos="fade-down"id='nav'>
  <div class="container-fluid" >
  <a  href="/"><img src={logo} alt="nav-logo" /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/work">Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/blog">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/career">Career</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar