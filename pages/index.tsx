import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
// import Link from 'next/link';
// import ProjectData from '../data/data.json';
// import posthog from 'posthog-js';
// import Project from '../components/Project';

const blurIMG = 'https://www.mariusnedelcu.com/images/kitty.jpeg';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'nedzen',
      }}
    >
      <header className="postHeader">
        <div className="intro">
          <p>
            Art is the thing being made just as much as the act of making it. I
            enjoy the process. It is deeply satisfying. That is enough of a
            reason to keep doing it. The concepts and ideas I incorporate in my
            work have varied significantly over time. At the moment, I feel more
            at ease with visual art, but that as well may change over time.
          </p>
        </div>
      </header>

      <main className="DSGN">
        <div className="rowpost">
          <ul className="collection">
            <li>
              <Image
                blurDataURL={blurIMG}
                placeholder="blur"
                alt="KxvThF8"
                src="https://i.ibb.co/KxvThF8/carnivora-5.jpg"
                width={2000}
                height={2000}
                priority
                layout="responsive"
              />
              <a target="_blank" href="/gt">
                Tillandsia Cybersentia
              </a>
            </li>
            <li>
              <Image
                blurDataURL={blurIMG}
                placeholder="blur"
                alt="KxvThF8"
                src="https://i.ibb.co/Kb2gxhz/ethereal-0.jpg"
                width={6000}
                height={3800}
                priority
                layout="responsive"
              />
              <a target="_blank" href="/ge">
                Ethereal hues
              </a>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default About;
