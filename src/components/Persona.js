import React from 'react';
import personaImage from '../assets/Persona 2.jpg'; 

const Persona = () => {
  return (
    <section className="persona" id="persona">
      <h2>Persona: Amina Khurram</h2>
      <img src={personaImage} alt="Persona2" />
      <h4>Problem Statement</h4>
      <p>
        Amina Khurram is a full-time student with dyslexia who needs a reservation web that is easy to navigate and can also accommodate a large group of people. Most reservation websites cannot accommodate larger groups of people and are text-heavy.
      </p>
    </section>
  );
};

export default Persona;

