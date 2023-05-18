import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import ExtraSection1 from '../Sections/ExtraSection1';
import SliderSection from '../Sections/SliderSection';

const FrontPage = () => {
  return (
    <div>
      <Navbar></Navbar>
    <ExtraSection1></ExtraSection1>
 <SliderSection></SliderSection>
    <Footer></Footer>
    </div>
  );
};

export default FrontPage;