import React from 'react';
import Layout from '../components/Layout';
// import Script from 'next/script';
// import Image from 'next/image';
// import Link from 'next/link';
// import ProjectData from '../data/data.json';
// import posthog from 'posthog-js';
import { script, scripts } from '../components/gallery_script';

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
      <main>
        <div className="content">
          <div id="rgbKineticSlider" className="rgbKineticSlider"></div>
          <nav className="galNav">
            <a href="#" className="main-nav prev" data-nav="previous">
              Prev <span></span>
            </a>
            <a href="#" className="main-nav next" data-nav="next">
              Next <span></span>
            </a>
          </nav>
        </div>

        <div dangerouslySetInnerHTML={{ __html: scripts }} />
        <div dangerouslySetInnerHTML={{ __html: script }} />
      </main>
    </Layout>
  );
};

export default About;
