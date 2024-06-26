import React from 'react'
import "../CSS/navigation.css"
import "../Home.css"

const NavigationBar = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='logo'> Word IS</div>
        <ul className='nav-list'>
          <li className='nav-item'>
            <a href="/home">Home</a>
          </li>
          <li className='nav-item'>
            <a href="/report"> Report</a>
          </li>
          <li className='nav-item'>
            <a href="/news"> News</a>
          </li>
          <li className='nav-item'>
            <a href="/update">Update</a>
          </li>
        </ul>
        <div>
          <input type="text" name="search" id="search" placeholder='Search Here' />
          <button className='main-search'>Search</button>
        </div>
        <div>
          <button className='login-btn'>Login</button>
        </div>
      </nav>
    </header>
  )
}

export default NavigationBar
