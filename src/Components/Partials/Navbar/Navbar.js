import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import NavbarProfile from '../NavbarProfile/NavbarProfile'

export default function Navbar() {
  return (
    <Nav
      activeKey="/home"
      id='navbar-container' 
      className='background-base-2 px-5 align-items-center justify-content-between'
    >
      <Nav className='align-items-center'>
        <Nav.Item>
          <NavLink to='/'><h1 className='font-size-30 color-base-1'>Expense Menagement</h1></NavLink>
        </Nav.Item>
        
        <NavbarMenu />
      </Nav>

      <Nav>
        <NavbarProfile />
      </Nav>
    </Nav>
  )
}