import React from "react";
import Image1 from '../assets/paperWireframeWeb/p1.jpg';
import Image2 from '../assets/paperWireframeWeb/p2.jpg';
import Image3 from '../assets/paperWireframeWeb/p3.jpg';
import Image4 from '../assets/paperWireframeWeb/p4.jpg';
import Image5 from '../assets/paperWireframeWeb/p5.jpg';
import ImageMobile1 from '../assets/paperWireframeMobileRes/p_1_2.jpg';
import ImageMobile2 from '../assets/paperWireframeMobileRes/p_3_4.jpg';
import ImageMobile3 from '../assets/paperWireframeMobileRes/p_5.jpg';


const PaperWireframes = () =>{
    return (
       <div>
      <section className="persona">
      <h2>Paper Wireframes</h2>
      <p>Creating paper sketches of the website allowed me to address user concerns 
         effectively in the digital wireframes. The homepage focused on addressing pain 
         points, such as language selection and restaurant categories, streamlining the user
         experience and saving valuable time.</p>
      <div className="images">
      <img src={Image1} alt="" />
      <img src={Image2} alt="" />
      <img src={Image3} alt="" />
      <img src={Image4} alt="" />
      <img src={Image5} alt="" />
      </div>
    </section>

    {/* Paper Wireframes Mobile responsive */}
    <section className="persona">
    <h2>Paper Wireframes For Mobile Screen</h2>
    <p>Spending time on paper wireframes for the smaller screen version was essential in
        ensuring that the digital wireframes effectively addressed user concerns. The
        focus on the home screen remained the same, emphasizing solutions for pain points
        like language selection and restaurant categories.</p>
    <div className="images">
    <img src={ImageMobile1} alt="" />
    <img src={ImageMobile2} alt="" />
    <img src={ImageMobile3} alt="" />
    </div>
     </section>
    </div>
    );
};
export default PaperWireframes;