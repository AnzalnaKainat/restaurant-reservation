import React from 'react';

const AccessibilityConsiderations = () => {
  return (
    <div className="containers color">
      <h2>Accessibility considerations</h2>
      <section className="product-overview">
        <div className="col-findings one">
          <p>​I incorporated a language selection feature to enhance accessibility for diverse users.</p>
        </div>

        <div className="col-findings two">
          <p>I used headings with different sized text for clear visual hierarchy</p>
        </div>

        <div className="col-findings three">
          <p>I used landmarks to help users navigate the site, including users who rely on assistive technologies.</p>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityConsiderations;
