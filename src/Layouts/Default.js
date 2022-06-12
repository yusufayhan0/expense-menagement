import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Partials/Navbar/Navbar';

export default function Default() {
  return (
    <div>
      <Navbar />
      <Outlet /> 
    </div>
  )
}
