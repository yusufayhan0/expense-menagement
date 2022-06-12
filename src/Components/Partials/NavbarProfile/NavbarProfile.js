import React from 'react'
import Image from 'react-bootstrap/Image'

export default function NavbarProfile() {
  return (
    <div>
      <Image 
        width={40} 
        roundedCircle={true} 
        src="https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg" 
      />
      <span className='ms-3 fw-bold color-base-1'>
        Yusuf AYHAN
      </span>
    </div>
  )
}
