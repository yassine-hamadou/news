import React from 'react'
import './Header.css';

function Header() {
  return (
        <header>
         <div class="header-container">
            <div class="header-left">
             <a href="#">
        <img src="logo-bcc.jpg" alt="logo-bcc" class="logo"/> 
      </a>
      
    </div>
    <nav class="header-right">
      <ul>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#classes">Classes</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#community">Community</a></li>
      </ul>
    </nav>
    <div class="header-btns">
      <button class="add-project-btn">Add Project</button>
      <button class="log-in-btn">Log In</button>
    </div>
  </div>
</header>
  )
}

export default Header
