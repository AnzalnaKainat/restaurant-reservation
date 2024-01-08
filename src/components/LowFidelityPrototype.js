import React from "react";
import LowFiPrototypeImage from '../assets/lowfi.png';

const LowFiPrototypeSection = () => {
  return (
    <section className="prototype" id="low-fi">
      <div className="prototype-info">
        <h3>Low-Fidelity Prototype</h3>
        <p>
          After turning the final wireframes into a prototype and conducting a usability study, I improved the prototype to show how users go through steps like choosing a restaurant, pre-ordering, entering reservation details, adding payment options, and confirming the reservation
        </p>
        <a href="https://xd.adobe.com/view/0abcb791-02a8-4a4f-88e2-2a65eae599b2-5fef/" target="_blank" rel="noopener noreferrer">View Low-fidelity prototype</a>
      </div>

      <div className="prototype-image">
        <img src={LowFiPrototypeImage} alt="Low-Fidelity Prototype" />
      </div>
    </section>
  );
};

export default LowFiPrototypeSection;
