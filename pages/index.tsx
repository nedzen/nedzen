import React from 'react';
import Layout from '../components/Layout';
// import Image from 'next/image';
// import Link from 'next/link';
// import ProjectData from '../data/data.json';
// import posthog from 'posthog-js';
// import Project from '../components/Project';

// const handleOnBuy = () => {
//   posthog.capture('purchase', { price: 5900, currency: 'USD' });
// };

const introcontent = `<p>Art is 'the thing' being made just as much as the act of making it. I enjoy the process. It is deeply satisfying. That is enough of a reason to keep doing it. The concepts and ideas I incorporate in my work have varied significantly over time. At the moment, I feel more at ease with visual art, but that as well may change over time.</p>`;

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'nedzen',
      }}
    >
      <header className="postHeader">
        <div className="intro">
          <>
            {/* <ul className="secNav">
              <li>
                <Image
                  blurDataURL={blurIMG}
                  placeholder="blur"
                  alt={`cover`}
                  src={`/images/avatar.png`}
                  width={50}
                  height={50}
                  priority
                />
              </li>
              <li>
                <mark>Contact: hello@mariusnedelcu.com</mark>
              </li>
            </ul> */}
            <div dangerouslySetInnerHTML={{ __html: introcontent }} />
          </>
        </div>
      </header>

      <main className="DSGN">
        <div className="rowpost">
          {/* {ProjectData.map((item: any, i: number) => {
            return <Post key={i} data={item} />;
          })} */}
          <a href="/gallery">gallery</a>
        </div>
      </main>
    </Layout>
  );
};

export default About;
