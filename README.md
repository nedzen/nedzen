# NextJS - Typescript - MDX - Blog

A Next.js starter for your next blog or personal site. Built with:

- [Typescript](https://www.typescriptlang.org/)
- Write posts with [MDX](https://mdxjs.com/)
- Style with [Tailwind CSS](https://tailwindcss.com/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

This Starter is **heavily** inspired by [Lee Robinson](https://github.com/leerob/leerob.io) and [Anson Lichtfuss](https://github.com/ansonlichtfuss/website).

👀 [View the Live Demo](https://nextjs-typescript-mdx-blog.vercel.app/)

## Getting Started

```bash
git clone https://github.com/ChangoMan/nextjs-typescript-mdx-blog.git
cd nextjs-typescript-mdx-blog

yarn install
# or
npm install

yarn dev
# or
npm run dev
```

Your new site will be up at http://localhost:3000/

# working with IPFS

Removing pins pass in flag `cid` or `name` (filename)
`ipfs pin remote rm --service=pinata -cid=QmYTCUoyLvkgLiWcVuwr8sQK5RGb9jdSSFpSMvGghEcYC8`

Using pinata CLI
`pinata-cli --help`

IPFS docs : <https://docs.ipfs.io/how-to/address-ipfs-on-web/>

https://docs.pinata.cloud/api-pinning/pinning-services-api#configuring-pinata-in-the-ipfs-cli

This seems to work only with ERC-20

<!-- import { NFTE } from '@nfte/react';
<NFTE contract="0x2953399124f0cbb46d2cbacd8a89cf0599974963" tokenId="90273974914282870690346437205062680115842312674309263334320963167329921794049"/> -->
<!-- https://www.youtube.com/watch?v=AaCgydeMu64 -->

### adding images

```
<Image
  blurDataURL={
    'https://ipfs.io/ipfs/QmZ8xq37g7r5DrXgxpfifTZcJnfHdQkbQy4WxBsR5Xn7h9'
  }
  placeholder="blur"
  alt={`Bridge`}
  src={`https://ipfs.io/ipfs/QmZ8xq37g7r5DrXgxpfifTZcJnfHdQkbQy4WxBsR5Xn7h9`}
  width={1440}
  height={960}
  priority
/>
```

tracking umami--click--signup-button

# Tillandsias

```JSON
[
  "http://localhost:3000/images/tillandsias/blood_0.jpg",
  "http://localhost:3000/images/tillandsias/blood_1.jpg",
  "http://localhost:3000/images/tillandsias/blood_10.jpg",
  "http://localhost:3000/images/tillandsias/blood_2.jpg",
  "http://localhost:3000/images/tillandsias/blood_3.jpg",
  "http://localhost:3000/images/tillandsias/blood_4.jpg",
  "http://localhost:3000/images/tillandsias/blood_5.jpg",
  "http://localhost:3000/images/tillandsias/blood_6.jpg",
  "http://localhost:3000/images/tillandsias/blood_7.jpg",
  "http://localhost:3000/images/tillandsias/blood_8.jpg",
  "http://localhost:3000/images/tillandsias/blood_9.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_0.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_1.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_10.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_11.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_12.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_13.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_14.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_15.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_16.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_17.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_18.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_19.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_2.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_20.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_21.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_3.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_4.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_5.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_6.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_7.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_8.jpg",
  "http://localhost:3000/images/tillandsias/carnivora_9.jpg",
  "http://localhost:3000/images/tillandsias/charcoal_0.jpg",
  "http://localhost:3000/images/tillandsias/charcoal_1.jpg",
  "http://localhost:3000/images/tillandsias/charcoal_2.jpg",
  "http://localhost:3000/images/tillandsias/charcoal_3.jpg",
  "http://localhost:3000/images/tillandsias/charcoal_4.jpg",
  "http://localhost:3000/images/tillandsias/cyborg_0.jpg",
  "http://localhost:3000/images/tillandsias/cyborg_1.jpg",
  "http://localhost:3000/images/tillandsias/cyborg_10.jpg",
  "http://localhost:3000/images/tillandsias/cyborg_11.jpg",
  "http://localhost:3000/images/tillandsias/cyborg_12.jpg",
  "http://localhost:3000/images/tillandsias/cyborg_13.jpg",
  "http://localhost:3000/images/tillandsias/cyborg_2.jpg",
  "http://localhost:3000/images/tillandsias/cyborg_3.jpg",
  "http://localhost:3000/images/tillandsias/cyborg_4.jpg",
  "http://localhost:3000/images/tillandsias/cyborg_5.jpg",
  "http://localhost:3000/images/tillandsias/cyborg_6.jpg",
  "http://localhost:3000/images/tillandsias/cyborg_7.jpg",
  "http://localhost:3000/images/tillandsias/cyborg_8.jpg",
  "http://localhost:3000/images/tillandsias/cyborg_9.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_0.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_1.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_10.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_11.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_12.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_13.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_14.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_15.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_16.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_17.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_18.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_19.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_2.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_20.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_21.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_3.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_4.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_5.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_6.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_7.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_8.jpg",
  "http://localhost:3000/images/tillandsias/hybrid_9.jpg",
  "http://localhost:3000/images/tillandsias/ice_0.jpg",
  "http://localhost:3000/images/tillandsias/ice_1.jpg",
  "http://localhost:3000/images/tillandsias/ice_10.jpg",
  "http://localhost:3000/images/tillandsias/ice_11.jpg",
  "http://localhost:3000/images/tillandsias/ice_12.jpg",
  "http://localhost:3000/images/tillandsias/ice_2.jpg",
  "http://localhost:3000/images/tillandsias/ice_3.jpg",
  "http://localhost:3000/images/tillandsias/ice_4.jpg",
  "http://localhost:3000/images/tillandsias/ice_5.jpg",
  "http://localhost:3000/images/tillandsias/ice_6.jpg",
  "http://localhost:3000/images/tillandsias/ice_7.jpg",
  "http://localhost:3000/images/tillandsias/ice_8.jpg",
  "http://localhost:3000/images/tillandsias/ice_9.jpg",
  "http://localhost:3000/images/tillandsias/metalglass_0.jpg",
  "http://localhost:3000/images/tillandsias/09 metalglass_1.jpg",
  "http://localhost:3000/images/tillandsias/metalglass_10.jpg",
  "http://localhost:3000/images/tillandsias/metalglass_11.jpg",
  "http://localhost:3000/images/tillandsias/metalglass_12.jpg",
  "http://localhost:3000/images/tillandsias/metalglass_13.jpg",
  "http://localhost:3000/images/tillandsias/metalglass_14.jpg",
  "http://localhost:3000/images/tillandsias/09 metalglass_15.jpg",
  "http://localhost:3000/images/tillandsias/metalglass_16.jpg",
  "http://localhost:3000/images/tillandsias/metalglass_17.jpg",
  "http://localhost:3000/images/tillandsias/09 metalglass_18.jpg",
  "http://localhost:3000/images/tillandsias/09 metalglass_19.jpg",
  "http://localhost:3000/images/tillandsias/metalglass_2.jpg",
  "http://localhost:3000/images/tillandsias/metalglass_3.jpg",
  "http://localhost:3000/images/tillandsias/09 metalglass_4.jpg",
  "http://localhost:3000/images/tillandsias/09 metalglass_5.jpg",
  "http://localhost:3000/images/tillandsias/09 metalglass_6.jpg",
  "http://localhost:3000/images/tillandsias/09 metalglass_7.jpg",
  "http://localhost:3000/images/tillandsias/metalglass_8.jpg",
  "http://localhost:3000/images/tillandsias/metalglass_9.jpg",
  "http://localhost:3000/images/tillandsias/pink_0.jpg",
  "http://localhost:3000/images/tillandsias/pink_1.jpg",
  "http://localhost:3000/images/tillandsias/pink_10.jpg",
  "http://localhost:3000/images/tillandsias/pink_11.jpg",
  "http://localhost:3000/images/tillandsias/pink_12.jpg",
  "http://localhost:3000/images/tillandsias/pink_13.jpg",
  "http://localhost:3000/images/tillandsias/pink_14.jpg",
  "http://localhost:3000/images/tillandsias/pink_15.jpg",
  "http://localhost:3000/images/tillandsias/pink_16.jpg",
  "http://localhost:3000/images/tillandsias/pink_2.jpg",
  "http://localhost:3000/images/tillandsias/pink_3.jpg",
  "http://localhost:3000/images/tillandsias/pink_4.jpg",
  "http://localhost:3000/images/tillandsias/pink_5.jpg",
  "http://localhost:3000/images/tillandsias/pink_6.jpg",
  "http://localhost:3000/images/tillandsias/pink_7.jpg",
  "http://localhost:3000/images/tillandsias/pink_8.jpg",
  "http://localhost:3000/images/tillandsias/pink_9.jpg",
  "http://localhost:3000/images/tillandsias/translucent_0.jpg",
  "http://localhost:3000/images/tillandsias/translucent_1.jpg",
  "http://localhost:3000/images/tillandsias/translucent_10.jpg",
  "http://localhost:3000/images/tillandsias/translucent_11.jpg",
  "http://localhost:3000/images/tillandsias/translucent_12.jpg",
  "http://localhost:3000/images/tillandsias/translucent_13.jpg",
  "http://localhost:3000/images/tillandsias/translucent_14.jpg",
  "http://localhost:3000/images/tillandsias/translucent_15.jpg",
  "http://localhost:3000/images/tillandsias/translucent_16.jpg",
  "http://localhost:3000/images/tillandsias/translucent_17.jpg",
  "http://localhost:3000/images/tillandsias/translucent_18.jpg",
  "http://localhost:3000/images/tillandsias/translucent_19.jpg",
  "http://localhost:3000/images/tillandsias/translucent_2.jpg",
  "http://localhost:3000/images/tillandsias/translucent_20.jpg",
  "http://localhost:3000/images/tillandsias/translucent_3.jpg",
  "http://localhost:3000/images/tillandsias/translucent_4.jpg",
  "http://localhost:3000/images/tillandsias/translucent_5.jpg",
  "http://localhost:3000/images/tillandsias/translucent_6.jpg",
  "http://localhost:3000/images/tillandsias/translucent_7.jpg",
  "http://localhost:3000/images/tillandsias/translucent_8.jpg",
  "http://localhost:3000/images/tillandsias/translucent_9.jpg",
  "http://localhost:3000/images/tillandsias/wild_0.jpg",
  "http://localhost:3000/images/tillandsias/wild_1.jpg",
  "http://localhost:3000/images/tillandsias/wild_2.jpg",
  "http://localhost:3000/images/tillandsias/wild_3.jpg",
  "http://localhost:3000/images/tillandsias/wild_4.jpg",
  "http://localhost:3000/images/tillandsias/wild_5.jpg",
  "http://localhost:3000/images/tillandsias/wild_6.jpg",
  "http://localhost:3000/images/tillandsias/wild_7.jpg",
  "http://localhost:3000/images/tillandsias/wild_8.jpg",
  "http://localhost:3000/images/tillandsias/wild_9.jpg"
]
```
