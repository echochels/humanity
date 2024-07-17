import React from 'react'
import './GetStarted.css'
import { JackInTheBox } from 'react-awesome-reveal';

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <JackInTheBox>
      <div className="paddings innerWidth g-container" id='getstarted'>
        <div className="flexColCenter inner-container">
          <span className='primaryText'>Donate to IYIATATA Youth Empowerment Initiative</span>
          <span className='secondaryText'>Together, we are making a difference and driving positive change in our community.
            <br />  Join us in our mission to empower and uplift!</span>
          <button className='button'>
            <a href="">Click to Donate</a>
          </button>
        </div>
      </div>
      </JackInTheBox>
    </section>
  )
}

export default GetStarted