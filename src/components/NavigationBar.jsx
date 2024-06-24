import React from 'react'

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
            <a href="/weather"> Weather</a>
          </li>
          <li className='nav-item'>
            <a href="/contact"> Contact</a>
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
