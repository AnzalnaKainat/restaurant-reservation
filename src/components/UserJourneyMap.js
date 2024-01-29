import React from 'react';
import UJmap from '../assets/UJ map2.png'; // Adjust the path accordingly

const  UserJourneyMap= () => {
  return (
    <section className="persona UJmap" id="UJmap">
        <h2>User Journey Map</h2>
        <p>Mapping Amina’s user journey revealed how helpful it would be for users to
            have access to a dedicated Restaurant Reservation website</p>
        <img src={UJmap} alt="User Journey Map" />
    </section>
  );
};

export default UserJourneyMap;

