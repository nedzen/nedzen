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

```JSON
[
  "https://ibb.co/Xj6p6J4",
  "https://ibb.co/0tBMdMV",
  "https://ibb.co/7rk568S",
  "https://ibb.co/bgjftfB",
  "https://ibb.co/ynjvVRC",
  "https://ibb.co/B62Dnnc",
  "https://ibb.co/TggCJ7y",
  "https://ibb.co/wNXcTVp",
  "https://ibb.co/X2JyXMz",
  "https://ibb.co/k5Y9nvZ",
  "https://ibb.co/99bKcRX",
  "https://ibb.co/3NjhGHH",
  "https://ibb.co/Mc0WJrd",
  "https://ibb.co/Zx8Vjsj",
  "https://ibb.co/QJx8RMZ",
  "https://ibb.co/8d6nXRW",
  "https://ibb.co/NmRqNTV",
  "https://ibb.co/jwS8YNS",
  "https://ibb.co/72bLnk9",
  "https://ibb.co/bWY2mNx",
  "https://ibb.co/bKhYC5j",
  "https://ibb.co/SvR44x4",
  "https://ibb.co/ZHNKq07",
  "https://ibb.co/SmY8pgP",
  "https://ibb.co/547VdQG",
  "https://ibb.co/jVgkLhg",
  "https://ibb.co/X56s42Z",
  "https://ibb.co/31nFRzR",
  "https://ibb.co/9vgh2MS",
  "https://ibb.co/nMHcWbt",
  "https://ibb.co/PMXtvzn",
  "https://ibb.co/2cVXLmT",
  "https://ibb.co/sR0VD4S",
  "https://ibb.co/Cn1jHyb",
  "https://ibb.co/68VGqBB",
  "https://ibb.co/KyCnB01",
  "https://ibb.co/6w96nnb",
  "https://ibb.co/nRrjXbq",
  "https://ibb.co/qCL21Cn",
  "https://ibb.co/0MSg4JP",
  "https://ibb.co/NjrpgB0",
  "https://ibb.co/7yq5p4N",
  "https://ibb.co/6RNBBLB",
  "https://ibb.co/M2TNc6K",
  "https://ibb.co/L10MmXT",
  "https://ibb.co/0QRkDNL",
  "https://ibb.co/JcX4ymd",
  "https://ibb.co/JF6WGcZ",
  "https://ibb.co/tLNJWpH",
  "https://ibb.co/5Tv9wv3",
  "https://ibb.co/LN0z1b6",
  "https://ibb.co/k39jp8r",
  "https://ibb.co/MGZZpNy",
  "https://ibb.co/M533qZK",
  "https://ibb.co/mB94SMX",
  "https://ibb.co/QCb5Xsq",
  "https://ibb.co/JQdzvxQ",
  "https://ibb.co/vL1Zdyj",
  "https://ibb.co/jb6kp3y",
  "https://ibb.co/z4bZCPy",
  "https://ibb.co/10c3CVJ",
  "https://ibb.co/9cZfV77",
  "https://ibb.co/dJPc8M0",
  "https://ibb.co/jHK4Kbg",
  "https://ibb.co/sKMznd7",
  "https://ibb.co/6Wk7H1F",
  "https://ibb.co/L5YWRj0",
  "https://ibb.co/LgRmgFx",
  "https://ibb.co/ncxp7GH",
  "https://ibb.co/BwYd1bL",
  "https://ibb.co/vXNWfpM",
  "https://ibb.co/Zc7tFpJ",
  "https://ibb.co/wwWZC1k",
  "https://ibb.co/nfJJQVZ",
  "https://ibb.co/hmfLtmC",
  "https://ibb.co/nsc82mq",
  "https://ibb.co/3cLM9CM",
  "https://ibb.co/FKpj3V4",
  "https://ibb.co/qnPs280",
  "https://ibb.co/Lgn8gnq",
  "https://ibb.co/CQxgz7w",
  "https://ibb.co/gR0KgD2",
  "https://ibb.co/BG4XPW8",
  "https://ibb.co/31dHGMP",
  "https://ibb.co/WybN8xM",
  "https://ibb.co/3zD5TJw",
  "https://ibb.co/hDR3573",
  "https://ibb.co/9gNZqSR",
  "https://ibb.co/bR6Yrgm",
  "https://ibb.co/68Y2pFh",
  "https://ibb.co/FgkYjCw",
  "https://ibb.co/8XjH0T8",
  "https://ibb.co/rxGDxcp",
  "https://ibb.co/tCvds7N",
  "https://ibb.co/z8ZGhgP",
  "https://ibb.co/bHjvs77",
  "https://ibb.co/7WdL4d8",
  "https://ibb.co/0y07w5r",
  "https://ibb.co/fF6tQX5",
  "https://ibb.co/311yrKL",
  "https://ibb.co/25tGDFR",
  "https://ibb.co/tcs5G8J",
  "https://ibb.co/vcND600",
  "https://ibb.co/3FWfHLG",
  "https://ibb.co/Qj8qHwW",
  "https://ibb.co/nMJxmzK",
  "https://ibb.co/nrKmZZm",
  "https://ibb.co/pf0ZMMr",
  "https://ibb.co/qRWn397",
  "https://ibb.co/hV4QkVG",
  "https://ibb.co/rQnNHH8",
  "https://ibb.co/6RJvfrC",
  "https://ibb.co/xFctLJc",
  "https://ibb.co/h7Vbhhy",
  "https://ibb.co/RC6BNjB",
  "https://ibb.co/P6YTFN5",
  "https://ibb.co/g4mGdNp",
  "https://ibb.co/vspXm3w",
  "https://ibb.co/WtgfNSH",
  "https://ibb.co/ypVB857",
  "https://ibb.co/TYn75gm",
  "https://ibb.co/sKPffPC",
  "https://ibb.co/rcDGWcM",
  "https://ibb.co/XzmJw6T",
  "https://ibb.co/RN4zrjf",
  "https://ibb.co/MPVJMsz",
  "https://ibb.co/nBZgNNy",
  "https://ibb.co/DRYYxZx",
  "https://ibb.co/64kfcWC",
  "https://ibb.co/rHYbRMQ",
  "https://ibb.co/vz0CfD2",
  "https://ibb.co/9px1N4X",
  "https://ibb.co/88hZBbr",
  "https://ibb.co/VCxpWvZ",
  "https://ibb.co/V2tn1yf",
  "https://ibb.co/JjsFKfd",
  "https://ibb.co/HtgXY5j",
  "https://ibb.co/ZJjqmwD",
  "https://ibb.co/B6nqfLQ",
  "https://ibb.co/17J1Wgs",
  "https://ibb.co/59XSsp4",
  "https://ibb.co/tHyxwXM",
  "https://ibb.co/xS8t2sY",
  "https://ibb.co/3vn0G7z",
  "https://ibb.co/x78WLDn",
  "https://ibb.co/k9r0dpT",
  "https://ibb.co/cLxMDpX",
  "https://ibb.co/ngJKdts",
  "https://ibb.co/mqXp2F9",
  "https://ibb.co/C7sCF4V",
  "https://ibb.co/m08LVq0",
  "https://ibb.co/2M6CL5f",
  "https://ibb.co/HdwCTQs",
  "https://ibb.co/0c6c0kX",
  "https://ibb.co/R0ZqT9t"
]
````


https://ibb.co/JHyHvX1
https://ibb.co/QFP7D7n
https://ibb.co/P4KSXtt
https://ibb.co/L0S6fR4
https://ibb.co/BNK9Xy1
https://ibb.co/74WLLcv
https://ibb.co/KNBB23H
https://ibb.co/pJvkxY7
https://ibb.co/9WQkdpP
https://ibb.co/Yy1V7wy
https://ibb.co/9Gh8rgf
https://ibb.co/WsF4D0h
https://ibb.co/gdxhftf
https://ibb.co/PzYyxJy
https://ibb.co/ss37jTp
https://ibb.co/714tNDQ
https://ibb.co/Zh1RyHc
https://ibb.co/pv2s6BQ
https://ibb.co/BzD4njp
https://ibb.co/hfcXht0
https://ibb.co/ZgBnp3F
https://ibb.co/9pfKr1w
https://ibb.co/BgmHbbZ
https://ibb.co/2FM6G9F
https://ibb.co/Rc0kz42
https://ibb.co/173VdT0
https://ibb.co/y860KrH
https://ibb.co/f8yjTRC
https://ibb.co/ScWBxMV
https://ibb.co/n67yMm8