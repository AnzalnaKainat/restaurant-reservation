import React from "react";
import SitemapImage from '../assets/sitemap.png'

const Sitemap = () => {
     return (
        <section className="persona sitemap" id="sitemap">
        <h2>Sitemap</h2>
        <p>Difficulty with website navigation was a primary pain point for users, so I used 
            that knowledge to create a sitemap. My goal here was to make strategic information
            architecture decisions that would improve overall website navigation. The
            structure I chose was designed to make things simple and easy.</p>
        <img src={SitemapImage} alt="Sitemap"/>
        </section>
     );
};
export default Sitemap;
