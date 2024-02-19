import React from 'react';

const ProductOverview = () => {
  return (
    <div>
        
       {/* Product Description */}
      <section className="the-product">
        <h1>Restaurant Reservation Website Design</h1>
        <p>
          EatTrek is a restaurant website for people with busy lives who don't like waiting in lines and want to order in their own language. With EatTrek, you can easily reserve tables at your favorite places, order food in your language, and even pick your meal before you arrive. It's perfect for students and professionals who want to enjoy their meals without any hassles.
        </p>
      </section>

      {/* Tool & Technologies */}
      <section className="row">
          <div className="col">
            <h5>Timeline</h5>
            <p>1 September 2023 to 18 September 2023</p>
          </div>

          <div className="col">
            <h5>Tools</h5>
            <p>AdobeXD</p>
          </div>

          <div className="col">
            <h5>Platform</h5>
            <p>Desktop</p>
          </div>
    </section>

    {/* Product Overview */}
    <div className="containers">
        <h2>Product Overview</h2>
        <section className="product-overview">
            <div className="col">
              <h5>My Role</h5>
              <p>UX designer designing a website for Restaurant Reservations from Ideation to Implementation</p>
            </div>
    
            <div className="col">
              <h5>The Problem</h5>
              <p>Long wait times and language barriers often hinder busy individuals from enjoying a seamless dining experience at restaurants.</p>
            </div>
            
            <div className="col">
              <h5>The Goal</h5>
              <p>Design an websire that allows busy individuals to effortlessly reserve tables at restaurants, order meals in their preferred language, and minimize waiting times.</p>
            </div>
      </section>
    </div>

    {/* responsibilty */}
    <section className="responsibilty">
        <h2>My Responsibilities</h2>
        <p>Conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, and iterating on designs</p>
    </section>
    
    {/* user research pain points */}
    <section className="responsibilty">
        <h2>User Research: Summary</h2>
        <p>I conducted interviews to understand the users I’m designing for their needs. A primary user group identified through research was users who don’t like waiting in long lines and want multilingual interaction. This user group not only confirmed the initial assumptions about Restaurant reservation customers, but research also revealed that other factors, such as convenience, ease of payment, and the option to order their food ahead of time significantly impact their dining choices.</p>
    </section>
    
    {/* User Research: Pain Points */}
    <div class="containers color">
        <h2>User Research: Pain Points</h2>
        <section class="product-overview">
            <div class="col-findings one">
              <h5>Accessibility</h5>
              <p>The lack of language proficiency makes it, difficult to navigate</p>
            </div>
    
            <div class="col-findings two">
              <h5>Long Waiting Lines</h5>
              <p>Customers find waiting in lines at restaurants frustrating, especially when dining with family or friends.</p>
            </div>
            
            <div class="col-findings three">
              <h5>IA</h5>
              <p>Text-heavy menus in apps are often difficult to read and order from</p>
            </div>
      </section>
    </div>
    </div>
  );
};

export default ProductOverview;
