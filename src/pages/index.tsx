import * as React from 'react';
import '../scss/index.scss';
//--- Components
import TopNav from '../components/nav';
//--- Images
import { StaticImage } from 'gatsby-plugin-image';

//--- CSS
const pageStyles = {
  padding: 0,
  margin: 0,
};

//--- JSX
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Planserv</title>
      <TopNav></TopNav>
      <StaticImage id="home" className="img-page" src="../images/home.png" alt="home" />
      <StaticImage id="about" className="img-page" src="../images/about.png" alt="about" />
      <StaticImage id="company-details" className="img-page" src="../images/companydetails.png" alt="company-details" />
      <StaticImage id="services" className="img-page" src="../images/services.png" alt="services" />
      <StaticImage id="the-planner" className="img-page" src="../images/theplanner.png" alt="the-planner" />
      <StaticImage id="contact-us" className="img-page" src="../images/contactus.png" alt="contact-us" />
    </main>
  );
};

export default IndexPage;
