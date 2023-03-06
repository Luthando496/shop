import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav class="navbar">
            <img src="/src/assets/logo-no-background.png" alt="back-photo" />

            <form  class="form">
                <input type="text" placeholder="search any item" style={{color:'red'}} />
                <button><i class='fas fa-search fa-2'></i></button>
            </form>

            <ul>
                <li>
                    <a href="/login">Login</a>
                    <a href="/login">Sign Up</a>
                    <a href="/login">Cart</a>
                </li>
            </ul>
    
        </nav>
    </header>
  )
}

export default Navbar