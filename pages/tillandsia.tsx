// import { format, parseISO } from 'date-fns';
// import { GetStaticProps } from 'next';

import React from 'react';
import Layout from '../components/Layout';
// import { getAllPosts } from '../lib/api';
// import { PostType } from '../types/post';
// import Image from 'next/image';
import Generation from '../data/replicate.json';
// import NFT from '../components/NFT';

// const blurIMG = 'https://www.mariusnedelcu.com/images/kitty.jpeg';

export const NFTpage = (): JSX.Element => {
  return (
    <Layout>
      <main className="NFT">
        <ul className="articleList">
          {Generation.map((el, index: number) => {
            return (
              <li key={index}>
                <ul className="tillandsias">
                  <li>
                    {/* <Image
                      blurDataURL={blurIMG}
                      placeholder="blur"
                      alt={el.id}
                      src={el.href}
                      width={el.width}
                      height={el.height}
                      priority
                      layout="responsive"
                    /> */}
                  </li>
                  <img src={el.href} />
                  <li>{el.id}</li>
                  <li>{el.width}</li>
                  <li>{el.height}</li>
                  <li>{el.guidance_scale}</li>
                  <li>{el.inference_steps}</li>
                  <li>{el.url}</li>
                  <li>{el.href}</li>
                </ul>
              </li>
            );
          }).reverse()}
        </ul>
      </main>
    </Layout>
  );
};

export default NFTpage;
