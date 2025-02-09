import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container" id='contact'>
                {/* left side */}
                <div className="flexColStart c-left">
                    {/* <span className='orangeText'>Our Contact</span> */}
                    <div className="title">
                        <h2 style={{ color: "#4066ff" }}>Easy to Contact us</h2>
                    </div>


                    {/* <span className='primaryText'>Easy to Contact us</span> */}
                    <span className='secondaryText'>We are always ready to make your life better</span>

                    <div className="flexColStart contactModes">
                        {/* first row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>+234 905 650 4304</span>
                                    </div>
                                </div>
                                <a href="tel:+2349056504304" className="flexCenter button">
                                    Call Us
                                </a>
                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>+234 905 650 4304</span>
                                    </div>
                                </div>
                                <a href="https://wa.me/2349056504304" target="_blank" className="flexCenter button">
                                    Chat Now
                                </a>
                                {/* <div className="flexCenter button">Chat Now </div> */}
                            </div>
                        </div>

                        {/* second row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Email Us</span>
                                        <span className='secondaryText'>iyiatata@support.com</span>
                                    </div>
                                </div>
                                <a href="mailto:someone@example.com" className="flexCenter button">
                                    Email Us
                                </a>
                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>+234 905 650 4304</span>
                                    </div>
                                </div>
                                <a href="sms:+2349056504304" className="flexCenter button">
                                    Message Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className="c-right">
                    <div className="image-container" style={{ borderRadius: "10px", border: "2px solid #eee" }}>
                        <img src="./cert.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact