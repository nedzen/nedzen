import React from 'react';
import Layout from '../components/Layout';
import Script from 'next/script';
// import Image from 'next/image';
// import Link from 'next/link';
// import ProjectData from '../data/data.json';
// import posthog from 'posthog-js';
// import Project from '../components/Project';

// const handleOnBuy = () => {
//   posthog.capture('purchase', { price: 5900, currency: 'USD' });
// };

const script = `
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      // kinetic slider autoplay
      var waitingDuration = 10000; // waiting for 1 second
      var counter = 0;
      var clickNextBtn = window.setInterval(function() {
        var nextBtn = document.querySelector('.next');
        // when page load, waiting for 'waitingDuration'
        if (counter == 0) {
          counter += 1;
        } else {
          nextBtn.click();
        }
      }, waitingDuration);
    });


    // images setup
    const images = [
      "https://replicate.delivery/pbxt/3Br5OckHGD5ZI102jMKeK6bdWuKQmeFDBzPtpgWro0yk4riQA/out-0.png",
      "https://replicate.delivery/pbxt/pQ8j7QGMJxqcAVvCetDP2I5Gq8mXigcNBwQpUkcvDwOf3riQA/out-0.png",
      "https://replicate.delivery/pbxt/uueQj4VcoPxVLavUvcFPhuLstNDUOKIePffmXxE9SoI4TvKCB/out-0.png",
      "https://replicate.delivery/pbxt/VrUjUceUKpyORyOfahhGz3XfRbfbE0uB5bUgJkfiIojIheqIE/out-0.png",
      "https://replicate.delivery/pbxt/sIwuPVHpf5zYHqr06PZrc2InfDmu3fGhy0DWoekkj9YEMvKCB/out-0.png"
    ];

    // content setup
    const texts = [
      ["Earth", "Surface gravity‎: ‎9.807 m/s²"],
      ["Mars", "Surface gravity‎: ‎3.711 m/s²"],
      ["Venus", "Surface gravity‎: ‎8.87 m/s²"],
    ]

    rgbKineticSlider = new rgbKineticSlider({

      slideImages: images, // array of images > must be 1920 x 1080
      itemsTitles: texts, // array of titles / subtitles

      backgroundDisplacementSprite: 'https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2081&q=80', // slide displacement image 
      cursorDisplacementSprite: 'https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2081&q=80', // cursor displacement image

      cursorImgEffect : true, // enable cursor effect
      cursorTextEffect : false, // enable cursor text effect
      cursorScaleIntensity : 0.65, // cursor effect intensity
      cursorMomentum : 0.14, // lower is slower

      swipe: true, // enable swipe
      swipeDistance : window.innerWidth * 0.4, // swipe distance - ex : 580
      swipeScaleIntensity: 2, // scale intensity during swipping

      slideTransitionDuration : 1, // transition duration
      transitionScaleIntensity : 30, // scale intensity during transition
      transitionScaleAmplitude : 160, // scale amplitude during transition

      nav: true, // enable navigation
      navElement: '.main-nav', // set nav class

      imagesRgbEffect : false, // enable img rgb effect
      imagesRgbIntensity : 0.9, // set img rgb intensity
      navImagesRgbIntensity : 80, // set img rgb intensity for regular nav 

      textsDisplay : false, // show title
      textsSubTitleDisplay : true, // show subtitles
      textsTiltEffect : true, // enable text tilt
      googleFonts : ['Playfair Display:700', 'Roboto:400'], // select google font to use
      buttonMode : false, // enable button mode for title
      textsRgbEffect : true, // enable text rgb effect
      textsRgbIntensity : 0.03, // set text rgb intensity
      navTextsRgbIntensity : 15, // set text rgb intensity for regular nav

      textTitleColor : 'white', // title color
      textTitleSize : 125, // title size
      mobileTextTitleSize : 125, // title size
      textTitleLetterspacing : 3, // title letterspacing

      textSubTitleColor : 'white', // subtitle color ex : 0x000000
      textSubTitleSize : 21, // subtitle size
      mobileTextSubTitleSize : 21, // mobile subtitle size
      textSubTitleLetterspacing : 2, // subtitle letter spacing
      textSubTitleOffsetTop : 90, // subtitle offset top
      mobileTextSubTitleOffsetTop : 90, // mobile subtitle offset top
    });
  </script>
`;

const scripts = `
  <script src="https://cdn.jsdelivr.net/gh/hmongouachon/rgbKineticSlider/js/libs/TweenMax.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/hmongouachon/rgbKineticSlider/js/libs/imagesLoaded.pkgd.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/hmongouachon/rgbKineticSlider/js/libs/pixi.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/hmongouachon/rgbKineticSlider/js/libs/pixi-filters.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/hmongouachon/rgbKineticSlider/js/rgbKineticSlider.js"></script>
`;
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
          <nav>
            <a href="#" className="main-nav prev" data-nav="previous">
              Prev <span></span>
            </a>
            <a href="#" className="main-nav next" data-nav="next">
              Next <span></span>
            </a>
          </nav>
        </div>

        <div dangerouslySetInnerHTML={{ __html: scripts }} />
        <Script src="lib/rgbKineticSlider.js" />
        <div dangerouslySetInnerHTML={{ __html: script }} />
      </main>
    </Layout>
  );
};

export default About;
