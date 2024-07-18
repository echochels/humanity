import React, { useState } from 'react';
import {
  Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton,
  AccordionItemPanel, AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion';
import { Fade, Roll, Reveal } from "react-awesome-reveal";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container" id='value'>
        {/* left side */}
        <div className="v-left">
          <Reveal>
            <div className="image-container" style={{ borderRadius: "10px", border: "2px solid #2E8EE6" }}>
              <img src="./goals.jpeg" alt="" />
            </div>
          </Reveal>
        </div>

        {/* right side */}
        <div className="flexColStart v-right">

          <Reveal>

            <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}>
              <div >
                <h2 className="title" style={{ color: "#4066ff", textAlign:"center" }}>Our Youth Empowerment Goals</h2>
              </div>

              {
                data.map((item, i) => {
                  const [className, setClassName] = useState('');
                  return (
                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                      <AccordionItemHeading>
                        <AccordionItemButton className='flexCenter accordionButton'>
                          <AccordionItemState>
                            {({ expanded }) =>
                              expanded
                                ? setClassName("expanded")
                                : setClassName("collapsed")
                            }
                          </AccordionItemState>

                          <div className="flexCenter icon">{item.icon}</div>
                          <span className="primaryText">{item.heading}</span>
                          <div className="flexCenter icon"><MdOutlineArrowDropDown size={20} /></div>
                        </AccordionItemButton>
                      </AccordionItemHeading>

                      <AccordionItemPanel>
                        <p className="secondaryText">{item.detail}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  );
                })
              }
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Value;
