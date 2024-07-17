import React, { useState } from 'react';
import './Achievements.css';
import { Bounce } from 'react-awesome-reveal';

const achievements = [
    {
        title: "Skill Development Training",
        shortDescription: "Short description of achievement 1",
        fullDescription: "•Conducted training sessions in soap making, bead making, and rice farming in partnership with the National Cereal Research Institute, Baddegi.<br/>•	Distributed sewing machines and grinding machines to empower individuals with practical skills.",
        image: "./people.jpeg",
    },
    {
        title: "Entrepreneurship Support",
        shortDescription: "Short description of achievement 2",
        fullDescription: "•	Distributed over 300 brand new motorcycles and keke napep to young entrepreneurs. <br/>•	Provided financial support of over ₦2.5 million to assist new business ventures.<br/>•	Distributed bags of rice and cartons of Indomie noodles to support local communities.",
        image: "./machine.png",
    },
    {
        title: "Agro-Mechanised Business Training",
        shortDescription: "Short description of achievement 3",
        fullDescription: "•	Empowered 200 youths across the nation with comprehensive training and ₦500,000 starter packs, in partnership with the National Centre for Agricultural Mechanisation, Ilorin.    ",
        image: "./agro.jpg",
    },
    {
        title: "Community Projects",
        shortDescription: "Short description of achievement 4",
        fullDescription: "•	Donated brand new buses to Mbutu Youth Council and Mbutu Sacred Heart Parish.<br/>•	Constructed and handed over a three-bedroom bungalow to an indigent family.<br/>•	Sponsored three individuals for overseas opportunities to seek greener pastures.<br/>•	Launched a new physical office at Suit B18, Melita Plaza, beside Efab Plaza, off Gimbia Street, Area 11, Abuja, to better serve our community.",
        image: "./community.jpeg",
    },
];


const Achievements = () => {
    const [show, setShow] = useState(false);
    const [selectedAchievement, setSelectedAchievement] = useState(null);
  
    const handleClose = () => setShow(false);
    const handleShow = (achievement) => {
      setSelectedAchievement(achievement);
      setShow(true);
    };
  
    return (
      <div>
        <div className={show ? "achievements-container blur" : "achievements-container"} id='achievements'>
        <div className="title">
                        <h2 style={{ color: "#1A1A1A" }}>OUR ACHIEVEMENTS</h2>
                    </div>
                    
          <div className="cards-wrapper">
            {achievements.map((achievement, index) => (
              <div className="card" key={index}>
                <img className="card-img-top" src={achievement.image} alt={achievement.title} />
                <div className="card-body">
                  <h5 className="card-title">{achievement.title}</h5>
                  {/* <p className="card-text">{achievement.shortDescription}</p> */}
                  <button className="button" onClick={() => handleShow(achievement)}>View More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {show && (
          <div className="modal-container">
            <div className="modal show" onClick={handleClose}>
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{selectedAchievement?.title}</h5>
                    <button type="button" className="close" onClick={handleClose}>
                      <span>&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <img src={selectedAchievement?.image} alt={selectedAchievement?.title} className="modal-img" />
                    <p dangerouslySetInnerHTML={{ __html: selectedAchievement?.fullDescription }}></p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn" onClick={handleClose}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Achievements;