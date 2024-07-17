import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="inner-width flex-center about-container" id='about'>
        {/* Left Side */}
        <div className="flex-column-center about-column" id='vision'>
          <div className="title">
            <h2 className="primary-text">Our Vision</h2>
          </div>
          <div className="flex-column-start about-content">
            <div className="flex-center row">
              <div className="flex-column-center content-block">
                <img src="./kid2.jpeg" alt="kids" className="image"/>
                <div className="flex-start">
                  <div className="flex-column-start detail">
                    <span className='secondary-text'>
                      To create a society where youth and women are self-reliant, educated, and actively contributing to the development of their communities.
                    </span>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-column-center about-column" id='mission'>
          <div className="title">
            <h2 className="primary-text">Our Mission</h2>
          </div>
          <div className="flex-column-start about-content">
            <div className="flex-center row">
              <div className="flex-column-center content-block">
                <img src="./kid.jpeg" alt="kids" className="image"/>
                <div className="flex-start">
                  <div className="flex-column-start detail">
                    <span className='secondary-text'>
                      To improve the living conditions of youth and women by providing training, increasing awareness, and creating job opportunities, especially for the destitute and indigent.
                    </span>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
