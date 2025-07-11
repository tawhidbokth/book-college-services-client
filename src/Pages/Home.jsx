import React from 'react';
import Banner from '../Components/Banner';
import CollegeCards from '../Components/CollegeCards';
import AdmissionEvents from '../Components/AdmissionEvents';
import AdmissionRequirements from '../Components/AdmissionRequirements';

const Home = () => {
  return (
    <div>
      <Banner />
      <CollegeCards />
      <AdmissionEvents />
      <AdmissionRequirements />
    </div>
  );
};

export default Home;
