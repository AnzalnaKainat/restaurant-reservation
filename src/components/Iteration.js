import React from 'react';
import HomepageImage from '../assets/Homepage-wireframe.png';
import cancelReservationImage from '../assets/cancel Reservation.png';
import searchImage from '../assets/Search.png';
import confirmedReservationWireframe from '../assets/Confirmed-reservation-wireframe.png';
import confirmedReservationImage from '../assets/confirmed_reservation.png';


const Iteration = () => {
  return (
    <section className="iteration" id="usability-findings">
      <h2>Mockups</h2>

      <div className="finding">
        <h3>Finding 1</h3>
        <p>
          After a usability study on the initial wireframes, users were confused and frustrated by options like 
          <b>"Cancel Reservation," "My Profile," and "Recent Activities"</b> that they couldn't access. They preferred dedicated pages for these,
          <b>so I integrated these changes into the mockups.</b>
        </p>
        <div className="showcasing-changes">
          <div className="usabilities">
            <h5>Before Usability</h5>
            <img src={HomepageImage} alt="" />
          </div>

          <div className="usabilities">
            <h5>After Usability</h5>
            <img src={cancelReservationImage} alt="" />
          </div>
        </div>
      </div>

      <hr />

      <div className="finding">
        <h3>Finding 2</h3>
        <p>
          The usability study revealed user frustration with the <b>search feature</b>. To address this issue, I integrated the <b>search feature on the homepage </b>for a more user-friendly experience.
        </p>
        <div className="showcasing-changes">
          <div className="usabilities">
            <h5>Before Usability</h5>
            <img src={HomepageImage} alt="" />
          </div>

          <div className="usabilities">
            <h5>After Usability</h5>
            <img src={searchImage} alt="" />
          </div>
        </div>
      </div>

      <hr />

      <div className="finding">
        <h3>Finding 3</h3>
        <p>
          The usability study showed user frustration with the <b>confirmation page lacking a map showing the restaurant's location</b>, as it only displayed a thank you message and reservation details. To resolve this issue,
          <b>I added a map location to the confirmation page.</b>
        </p>
        <div className="showcasing-changes">
          <div className="usabilities">
            <h5>Before Usability</h5>
            <img src={confirmedReservationWireframe} alt="" />
          </div>

          <div className="usabilities">
            <h5>After Usability</h5>
            <img src={confirmedReservationImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iteration;
