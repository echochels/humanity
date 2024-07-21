import React, { useState } from 'react';
import './GetStarted.css';
import { JackInTheBox } from 'react-awesome-reveal';

const GetStarted = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="g-wrapper">
      <JackInTheBox>
        <div className={`paddings innerWidth g-container ${isPopupVisible ? 'blurred' : ''}`} id='getstarted'>
          <div className="flexColCenter inner-container">
            <span className='primaryText'>Donate to IYIATATA Youth Empowerment Initiative</span>
            <span className='secondaryText'>Together, we are making a difference and driving positive change in our community.
              <br />  Join us in our mission to empower and uplift!</span>
            <button className='button' onClick={togglePopup}>
              Click to Donate
            </button>
          </div>
        </div>
      </JackInTheBox>

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={togglePopup}>&times;</span>
            <h2 style={{ color: "#4066ff" }}>Account Details</h2>
            <p>Account Name:  IYIATATA YOUTH EMPOWERMENT INITIATIVE</p>
            <p>Account Number: 1312673779</p>
            <p>Bank: Zenith Bank</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetStarted;
