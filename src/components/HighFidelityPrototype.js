import React from 'react';
import HighFiPrototypeImage from '../assets/highfi.png'; 

const HighFiPrototype = () => {
  return (
    <section className="prototype" id="high-fi">
      <div className="prototype-info">
        <h3>High-Fidelity Prototype</h3>
        <p>
          The final high-fidelity prototype streamlined user flows for restaurant selection and checkout, added a language selection feature, and enabled reservation cancellations within the app.
        </p>
        <a href="https://xd.adobe.com/view/e7ff292a-be6f-47b1-b068-35d75cb245bc-b2ac/?fullscreen" target="_blank" rel="noopener noreferrer">View High-fidelity prototype</a>
      </div>

      <div className="prototype-image">
        <img src={HighFiPrototypeImage} alt="High-Fidelity Prototype" />
      </div>
    </section>
  );
};

export default HighFiPrototype;
