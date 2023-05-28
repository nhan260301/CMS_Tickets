import React from 'react'
import './Navbar.scss'
import icSearch from '../../assets/menu/Search.png'
import icMail from '../../assets/menu/Mail.png'
import icBell from '../../assets/menu/Bell.png'
const Navbar = () => {
  return (
    <div>
      <div className='nav-container'>
        <div className='search'>
          <input type='text' placeholder='Tìm bằng số vé' />
          <img src={icSearch} />
        </div>
        <div className='contact'>
          <img src={icMail} />
          <img src={icBell} />
          <div className='image-user'></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
