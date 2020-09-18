import React from 'react';

import Single from '../../components/Single';
import Company from '../../components/Company';
import Specialty from '../../components/Specialty';
import Partners from '../../components/Partners';
import PaymentsAndCertificates from '../../components/PaymentsAndCertificates';
import Highlights from '../../components/Highlights';
import Line from '../../components/UI/Line';

const Home = () => {
  return (
    <>
      <Single sectionEnabled>
        <Highlights
          title="TRADIÇÃO E QUALIDADE"
          description="A mais de 28 anos no mercado, oferecendo qualidade."
        />
        <Company />
        <Specialty />
        <Partners />
        <Line />
        <PaymentsAndCertificates />
      </Single>
    </>
  );
};

export default Home;
