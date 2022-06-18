import React from 'react'

export default function DashboardCard({ title, data, status, backgroundColor }) {
  return (
    <div style={{backgroundColor}} className='dashboard-card-container w-100 p-3'>
      <h4 className='font-size-20'> { title } </h4>
      
      <span className='d-block font-size-35'> { data } </span>

      <span> { status } </span>
    </div>
  )
}
