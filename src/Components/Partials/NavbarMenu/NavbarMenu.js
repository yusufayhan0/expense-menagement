import React from 'react'
import { Nav } from 'react-bootstrap'
import {  NavLink } from "react-router-dom"

export default function NavbarMenu() {
  return (
    <Nav className='ms-5' id='navbar-menu-container'>
      <Nav.Item>
        <NavLink to='/' className={({ isActive }) => (isActive ? "active-class" : "")}>Dashboard</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to='/expense' className={({ isActive }) => (isActive ? "active-class" : "")}>Expenses</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to='/income' className={({ isActive }) => (isActive ? "active-class" : "")}>Income</NavLink>
      </Nav.Item>
    </Nav>
  )
}
