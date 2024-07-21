import React from 'react';
import './Founders.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Zoom } from 'react-awesome-reveal';

const Customer = ({ rating, title, description, image, name, country }) => (
  <div className="paddings innerWidth  customer">
    <img src={image} alt="customer image" />
    <h3>{title}</h3>
    <p dangerouslySetInnerHTML={{ __html: description }}></p>
    <span>{name}, {country}</span>
    <div className="social-media">
      <a href="https://www.facebook.com/share/kKFxEjKCBYkSCnDn/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.instagram.com/emekaobilor?igsh=YmpiM3g5d2E5d2c4" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div>
);

const Customers = () => (
  <section className="customers" id="founders" 
 
    style={{
      
      background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/people.jpeg") center/cover no-repeat fixed',
    }}>
    <div className=" sec-width">
      <div className="title">
        <h2 style={{color:"var(--secondary"}}>MEET THE FOUNDERS</h2>
      </div>
      <Zoom>
      <div className=" customers-container">
        <Customer 
          rating={4} 
          title="HON. CHIEF, and MRS CHUKWUMEKA E. OBILOR" 
          description={`<br />As the founder of this initiative, I am deeply committed to the vision of creating a society where youth and women are not only self-reliant but also pivotal contributors to their communities’ development. Our mission is ambitious: to transform lives through education, skill development, and entrepreneurial support, ensuring that every individual has the opportunity to realise their full potential.

          Our programs are meticulously designed to equip individuals with practical skills and resources, fostering a sense of independence and confidence. By partnering with esteemed organizations we provide comprehensive training and substantial support to our beneficiaries.
          
          I invite you to join us in this journey of empowerment and transformation. Together, we can build a brighter and more prosperous future for our communities.<br /><br />
          Thank you for your support.<br />
          Hon. Ezinwa Emeka Obilor<br />
          Founder, IYIATATA Youth Empowerment Initiative`}
          image="./founders.jpeg"
        />
      </div>
      </Zoom>
    </div>
  </section>
);

export default Customers;
