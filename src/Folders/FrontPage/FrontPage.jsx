import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import ExtraSection1 from '../Sections/ExtraSection1';
import SliderSection from '../Sections/SliderSection';
import ExtraSection2 from '../Sections/ExtraSection2';

const FrontPage = () => {
  return (
    <div>
      <Navbar></Navbar>
    <ExtraSection1></ExtraSection1>
 <SliderSection></SliderSection>

 <ExtraSection2></ExtraSection2>
    <Footer></Footer>
    </div>
  );
};

export default FrontPage;