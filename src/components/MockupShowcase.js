import React from 'react';
import homepage from '../assets/homepage.png';
import homepageMobile from '../assets/hompage1.png';
import menupage from '../assets/menupage.png';
import menupageMobile from '../assets/menupage1.png';
import reservationpage from '../assets/reservationpage.png';
import reservationpageMobile from '../assets/reservationpage1.png';
import ConfirmReservation from '../assets/confirmed_reservation.png';
import ConfirmReservationMobile from '../assets/confirm_reservation1.png';

const MockupShowcase = () => {
  return (
      <section className="mockup-showcase">
        <div className="mockup1">
          <img src={homepage} alt="homepage" />
          <img src={homepageMobile} alt="homepage mobile version" className="mobile-res" />
        </div>

        <div className="mockup1">
          <img src={menupage} alt="menu mobile version" />
          <img src={menupageMobile} alt="menu mobile version" className="mobile-res" />
        </div>

        <div className="mockup1">
          <img src={reservationpage} alt="reservation" />
          <img src={reservationpageMobile} alt="reservation mobile version" className="mobile-res" />
        </div>

        <div className="mockup1">
          <img src={ConfirmReservation} alt="confirmed reservation" />
          <img src={ConfirmReservationMobile} alt="confirmed reservation mobile version" className="mobile-res" />
        </div>
      </section>
  );
};

export default MockupShowcase;
