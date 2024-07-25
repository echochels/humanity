import React from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./logoo.png" alt="logo" width={100} />

            <OutsideClickHandler onOutsideClick={()=> {setMenuOpened(false)}}>
            <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                <a href="#vision">Our Vision</a>
                <a href="#mission">Our Mission</a>
                <a href="#achievements">Achievements</a>
                <a href="#value">Our Goals</a>
                <a href="#gallery">Gallery</a>
                <a href="#residencies">Our Impact</a>
                <a href="#contact">Contact Us</a>
                <a href="#founders">Founders</a>
                <button className='button'>
                <a href="#getstarted" style={{textDecoration:"none", color:"#fff"}}>Donate</a>
                </button>
            </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick={()=> setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30}/>
        </div>
        </div>
    </section>
  )
}

export default Header