'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { useRef } from 'react';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/all';

export const Hero = () => {
  const main = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.maximizeBox', // The element that triggers and gets pinned
          pin: '.content-wrapper', // Pin the trigger element
          start: 'center center', // Start when the center of the trigger hits the viewport center
          end: '+=1200', // Pin for 500px of scrolling
          scrub: true, // Link the timeline's progress to the scrollbar
        },
      });

      tl.to('.floatingText', {
        // End state
        y: -200,
        opacity: 0,
        ease: 'none', // A linear ease often feels best for scrub animations
      });

      tl.to('.maximizeBox', {
        scale: 0,
        opacity: 0,
        ease: 'power2.inOut',
      });

      // 1. The elements that will fade IN FIRST should start invisible.
      gsap.set('.paiInfo', { opacity: 0, y: 30 });
      gsap.set('.paiBoard', { scale: 1 });

      // 2. The elements that will fade IN LATER should also start invisible.
      gsap.set('.paiInfo2, .paiLaptop', { opacity: 0 });

      // --- CREATE ONE MASTER TIMELINE ---
      const animationTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.animation-container',
          start: 'top top',
          end: '+=7000', // Make the scroll distance longer to accommodate all animations
          scrub: true,
          pin: true,
        },
      });

      // --- BUILD THE ANIMATION "STORY" ---

      // Part 1: The Arrival
      animationTl.to('.paiBoard', {
        scale: 0.7,
        opacity: 1,
        duration: 2,
        ease: 'power2.inOut',
      });
      animationTl.to(
        '.paiInfo',
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1.5,
          ease: 'power2.out',
        },
        '-=1.5'
      ); // Overlap this with the board animation for a smoother effect

      animationTl.to('.paiBoard', {
        opacity: 0,
        scale: 0.5, // Scale down while fading out
        duration: 1,
      });
      animationTl.to(
        '.paiLaptop',
        {
          opacity: 1,
          duration: 1,
        },
        '<'
      );

      // Part 2: The Cross-Fade
      animationTl.to(
        '.paiInfo',
        {
          opacity: 0,
          duration: 1,
        },
        '>'
      );

      animationTl.to(
        '.paiInfo2',
        {
          opacity: 1,
          duration: 1,
        },
        '<'
      ); // '<' starts this at the same time as the previous animation

      animationTl.to('.animation-container', {
        scale: 0.9, // Scale down slightly
        opacity: 0,
        duration: 1.5,
      });

      const scrollMission = gsap.timeline({
        scrollTrigger: {
          trigger: '.scrollOver',
          start: 'top top',
          end: '+=5000',
          scrub: true,
          pin: true,
        },
      });

      scrollMission.to('.scrollOver1', {
        yPercent: -150,
        ease: 'none',
      });

      // const pinTl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: '.three-column-wrapper', // Trigger when the whole section enters view
      //     pin: '.three-column-wrapper', // Pin the PARENT container
      //     start: 'center center',
      //     end: '+=1000', // Pin for the longest duration needed
      //     scrub: true,
      //     // markers: true,
      //   },
      // });

      // // --- Add animations to the timeline ---

      // // This animation will make the side info fade out after a short scroll,
      // // creating the effect of a "shorter pin" for them.
      // pinTl.to(
      //   '.paiInfo', // Target BOTH side divs
      //   {
      //     opacity: 0,
      //     y: -50, // Animate them up and out
      //     stagger: 0.1,
      //   },
      //   '+=1' // This is the key! See explanation below.
      // );

      // pinTl.to(
      //   '.paiBoard',
      //   {
      //     opacity: 0,
      //     scale: 0.7,
      //   },
      //   '+=1'
      // );

      // // 2. NEW info fades in as the old info fades out (crossfade)
      // pinTl.to(
      //   '.paiInfo2',
      //   {
      //     opacity: 1,
      //     y: 0,
      //     stagger: 0.1,
      //   },
      //   '-=0.5'
      // ); // Start this 0.5s BEFORE the previous animation completes

      // pinTl.from(
      //   '.paiLaptop',
      //   {
      //     y: '100vh', // Start from way below the viewport
      //     opacity: 1, // Ensure it's visible as it slides
      //   },
      //   '<'
      // ); // "<" makes it start at the same time the board starts fading out

      // 3. The original .paiBoard fades out at the end
      // Start after a 1s delay, giving time to read the new info

      // 4. The .paiLaptop slides up from the bottom TO TAKE ITS PLACE

      // tl.to(
      //   '.paiBoard',
      //   {
      //     scale: 0.2,
      //     ease: 'none',
      //   },
      //   '>'
      // );
    },
    { scope: main }
  );

  return (
    <div className="w-full space-y-40" ref={main}>
      <div className="p-8 sm:p-20 space-y-40">
        <section className="relative mx-auto  h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl z-10 ">
          {/* Video Background */}
          <div className="absolute w-full h-full z-[-1]">
            <video
              autoPlay
              loop
              muted
              playsInline
              // Use the path from the public folder
              // poster="/images/hero-poster.jpg"
              // `object-cover` ensures the video covers the area without distortion
              className="w-full h-full object-cover"
            >
              {/* <source src="/videos/hero-video.webm" type="video/webm" /> */}
              <source src="/videos/hero_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Dark Overlay for Readability */}
          {/* `bg-black/50` is a Tailwind shorthand for black with 50% opacity */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

          {/* Hero Content */}
          {/* `relative` and `z-10` ensure this content sits on top of the overlay and video */}
          <div className="relative z-10 text-center text-white px-4 content-wrapper">
            <div className="floatingText">
              <h1 className="text-[80px] md:text-[80px] font-semibold leading-[1.3] ">
                Minimize Cost.
              </h1>
            </div>
            <div className="maximizeBox">
              <h1 className="text-[80px] md:text-[80px] font-semibold leading-[1.3] mb-4 metallic-text">
                Maximize Uptime.
              </h1>
              <div className="flex gap-5 justify-center">
                <Link
                  href="/get-started"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/get-started"
                  className="inline-flex items-center gap-2 border-white border-2 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                >
                  Get Started
                  <span className="font-bold text-xl">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div
          className=" animation-container relative z-20"
          style={{ height: '120vh' }}
        >
          {/* This is the element you want to position.
    - top-1/2: Puts the top of this element at the parent's vertical midpoint.
    - -translate-y-1/2: Shifts the element UP by 50% of its OWN height.
    This combination perfectly centers it.
  */}
          <div
            className="centered absolute top-1/4 left-0 w-full h-screen -translate-y-1/4 z-40"
            style={{ height: '100vh' }}
          >
            {/* Note: The height determines how long you scroll while pinned */}
            <section className="first-section absolute top-1/2  -translate-y-1/2 left-0 w-full h-screen">
              <div className="three-column-wrapper flex justify-between items-center h-full px-8">
                {/* Add the "paiInfo" class to the left-side container */}
                <div className="paiInfo w-1/4">
                  {/* ... your left side content ... */}
                  <div className="space-y-50">
                    <div className="space-y-3">
                      <h2 className="md:text-[40px] metallic-text">
                        Pai Enterprise Sensor
                      </h2>
                      <p className="text-[16px] font-normal">
                        All your power sources. One smart Sensor
                      </p>
                      <button className="btn-ghost">Learn More</button>
                    </div>
                    <div>
                      <Image
                        src="https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/factories.png"
                        alt="factories"
                        width={250}
                        height={250}
                      />
                      <p className="mt-2">For Factories</p>
                    </div>
                  </div>
                </div>

                <div className="paiBoard w-1/2 flex items-center justify-center">
                  <Image
                    src="https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/pai_board.png"
                    width={420}
                    height={270}
                    alt="pai_board"
                  />
                </div>

                <div className="paiInfo w-1/4">
                  <div>
                    <Image
                      src="https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/hospitals.png"
                      alt="hospitals"
                      width={350}
                      height={200}
                    />
                    <p className="mt-2">For Hospitals</p>
                  </div>
                </div>
              </div>
            </section>
            {/* This is the second section that will fade in */}
            <section className="second-section absolute top-1/2  -translate-y-1/2 left-0 w-full h-screen">
              <div className="three-column-wrapper2 flex justify-between items-center h-full px-8">
                <div className="paiInfo2 w-1/3">
                  {/* ... your new left side content ... */}
                  <div className="space-y-50">
                    <div className="space-y-3">
                      <h2 className="md:text-[40px] metallic-text">
                        Pai Enterprise Dashboard
                      </h2>
                      <p className="text-[16px] font-normal">
                        All energy insights, one view.
                      </p>
                      <button className="btn-ghost">Learn More</button>
                    </div>
                    <div>
                      <Image
                        src="https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/factories2.png"
                        alt="factories2"
                        width={250}
                        height={250}
                      />
                      <p className="mt-2">For Factories</p>
                    </div>
                  </div>
                </div>

                <div className="paiLaptop w-1/3 flex items-center justify-center">
                  <Image
                    src="https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/paiLaptop.png"
                    width={420}
                    height={270}
                    alt="pai_laptop"
                  />
                </div>

                <div className="paiInfo2 w-1/3">
                  <div>
                    <Image
                      src="https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/gym.png"
                      alt="gym"
                      width={350}
                      height={200}
                    />
                    <p className="mt-2">For Gyms</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <section className="scrollOver h-[200vh] relative">
        <div
          className="scrollOver1 absolute top-0 w-full bg-no-repeat bg-center flex  justify-start z-20"
          style={{
            backgroundImage:
              "url('https://ews-app-landing-page.s3.us-east-1.amazonaws.com/missionImage1.jpg')",
            height: '100vh',
            backgroundSize: 'cover',
            alignItems: 'flex-end',
          }}
        >
          {/* This is the black overlay for contrast */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

          {/* This container is aligned by its parent's flex properties.
    - We add padding (p-8) to give the content space from the edges.
    - The `relative` class isn't needed for positioning here, so it can be removed.
  */}
          <div className="bottom-left z-10 text-left text-white p-8 md:p-12">
            <h2 className="text-4xl font-medium">Unlocking Limitless</h2>
            <h2 className="text-4xl font-medium">Human Productivity</h2>
            <Link
              href="/get-started"
              className="mt-4 inline-flex items-center gap-2 border-white border-2 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              Learn More
              <span className="font-bold text-xl">&rarr;</span>
            </Link>
          </div>
        </div>

        <div
          className="scrollOver2 absolute top-0 w-full  bg-no-repeat bg-center  flex items-center justify-center z-10"
          style={{
            backgroundImage:
              "url('https://ews-app-landing-page.s3.us-east-1.amazonaws.com/missionImageChip.jpg')",
            height: '100vh',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold">Your Title Heres</h1>
            <p className="mt-4 text-lg">
              This text is readable on top of the dark overlay
            </p>
          </div>
        </div>
      </section>
      {/* <section>
        <div
          className="relative bg-contain bg-no-repeat bg-center h-[751px] flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://ews-app-landing-page.s3.us-east-1.amazonaws.com/missionImage1.jpg')",
            height: '751px',
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold">Your Title Here</h1>
            <p className="mt-4 text-lg">
              This text is readable on top of the dark overlay.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};
