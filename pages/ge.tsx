import React from 'react';
import Layout from '../components/Layout';
// import Script from 'next/script';
// import Image from 'next/image';
// import Link from 'next/link';
// import ProjectData from '../data/data.json';
// import posthog from 'posthog-js';
import { script, scripts } from '../components/gallery_script_e';

// const handleOnBuy = () => {
//   posthog.capture('purchase', { price: 5900, currency: 'USD' });
// };

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Tillandsia',
      }}
    >
      <div id="rgbKineticSlider" className="rgbKineticSlider"></div>
      <nav className="galNav">
        <a href="#" className="main-nav prev" data-nav="previous">
          Prev
        </a>
        <a href="#" className="main-nav next" data-nav="next">
          Next
        </a>
      </nav>

      <div dangerouslySetInnerHTML={{ __html: scripts }} />
      <div dangerouslySetInnerHTML={{ __html: script }} />
    </Layout>
  );
};

export default About;
