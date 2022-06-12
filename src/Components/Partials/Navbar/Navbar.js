import React from 'react'
import NavbarProfile from '../NavbarProfile/NavbarProfile'

export default function Navbar() {
  return (
    <header 
      id='navbar-container' 
      className='
        d-flex justify-content-between align-items-center 
        background-base-2 px-5'
    >
      <h1 className='font-size-30 color-base-1'>Expenses</h1>

      <NavbarProfile />
    </header>
  )
}
