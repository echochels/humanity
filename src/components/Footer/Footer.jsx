import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            {/* left side */}
            <div className="flexColStart f-left">
            <img src="./logoo.png" alt="logo" width={120} />

            <span className="secondaryText">Join us in making a difference! 🌍 
            </span>
            </div>

            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className="secondaryText">Abuja - Nigeria</span>
                <span className="secondaryText">Suite B18, Melita Plaza (Beside Efab Plaza)</span>
                <span className="secondaryText">Off Gimbiya Street, Area 11.</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer