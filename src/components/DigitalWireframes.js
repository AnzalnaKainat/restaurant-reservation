import React from "react";
import digitalHomepage from '../assets/Homepage-wireframe.png'
import digitalHomepageMobile from '../assets/Homepage-wireframe 1.png'
import digitalMenu from '../assets/hamburger menu-wireframe.png'


const DigitalWireframes = () =>{
    return (
       <div>
  <section className="persona digital-wireframe">
    <h2>Digital Wireframes</h2>
    <p>During the initial design phase, I incorporated user feedback and insights into the screen designs. Additionally, I organized restaurants into categories for a more straightforward and less cluttered navigation experience</p>
    <img src={digitalHomepage} alt="Digital wireframe" />
  </section>

  {/* Digital Wireframes Mobile responsive */}
  <section className="persona digital-wireframe-mobile">
    <h2>Digital Wireframes For Mobile Screen</h2>
    <p>Spending time on paper wireframes for the smaller screen version was essential in ensuring that the digital wireframes effectively addressed user concerns. The focus on the home screen remained the same, emphasizing solutions for pain points like language selection and restaurant categories.</p>
    <div className="images">
    <img src={digitalHomepageMobile} alt="" />
    <img src={digitalMenu} alt="" className="img-menu" />
    </div>
  </section>
       </div>
    );
};
export default DigitalWireframes;