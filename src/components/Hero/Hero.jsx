import React from 'react';
import './Hero.css';
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <motion.h1 initial={{y:"2rem", opacity:0}} animate={{y: 0 , opacity:1}} transition={{duration: 2, type:"spring"}}>IYIATATA Youth<br/>  Empowerment <br/> Initiative</motion.h1>
                </div>

                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Empowering youth & women to be self-reliant 💪</span>
                    <span className='secondaryText'>Improving lives through training & job creation 📚💼</span>
                    <span className='secondaryText'>Promoting unity & solidarity among youths ✊</span>
                </div>

                <div className="flexCenter search-bar">
                     <HiLocationMarker color="#3BFFB8" size={25}/>
                     <input type="text" />
                     <button className='button'>Search</button>
                </div>

                <div className="flexCenter stats">
                    {/* <div className="flexColCenter stat">
                        <span>
                        <CountUp start={100000} end={2000000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'> Support Provided</span>
                    </div> */}
                    <div className="flexColCenter stat">
                        <span>
                        <CountUp end={2}/>
                            <span>M</span>
                            <span style={{color:"#4066ff"}}>+</span>
                        </span>
                        <span className='secondaryText'>Funds Raised</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                        <CountUp end={200}/>
                            <span style={{color:"#4066ff"}}>+</span>
                        </span>
                        <span className='secondaryText'>Empowered Youths</span>
                    </div>


                    <div className="flexColCenter stat">
                        <span>
                        <CountUp start={200} end={500} duration={4}/>
                            <span>K</span>
                            <span style={{color:"#4066ff"}}>+</span>
                        </span>
                        <span className='secondaryText'>Starter Packs</span>
                    </div>

                </div>
            </div>

            {/* right side */}
            <div className="flexCenter hero-right">
                <motion.div initial={{x:"7rem", opacity:0}} animate={{x:0, opacity:1}} transition={{duration:2, type:"spring"}} className="image-container">
                    <img src="./kids.jpeg" alt="" />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero