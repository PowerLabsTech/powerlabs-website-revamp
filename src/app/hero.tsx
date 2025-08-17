'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { useRef } from 'react';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/all';
import chevronDown from '../../public/svgs/chevronDown.svg';
import { Subscribe } from './subscribe';
import Footer from '@/components/footer';

export const Hero = () => {
  const main = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // BEST PRACTICE: Use matchMedia to create animations only for desktop screens
      // This improves mobile performance by not running complex animations.
      const mm = gsap.matchMedia();

      // (min-width: 1024px) is for desktop
      mm.add('(min-width: 1024px)', function () {
        // --- ALL DESKTOP-ONLY ANIMATIONS GO HERE ---

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.maximizeBox',
            pin: '.content-wrapper',
            start: 'center center',
            end: '+=1200',
            scrub: true,
          },
        });

        tl.to('.floatingText', {
          y: -200,
          opacity: 0,
          ease: 'none',
        });

        tl.to('.maximizeBox', {
          scale: 0,
          opacity: 0,
          ease: 'power2.inOut',
        });

        // --- Animation for the PAI board and laptop section ---
        gsap.set('.paiInfo', { opacity: 0, y: 30 });
        gsap.set('.paiBoard', { scale: 1 });
        gsap.set('.paiInfo2, .paiLaptop', { opacity: 0 });

        const animationTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.animation-container',
            start: 'top top',
            end: '+=7000',
            scrub: true,
            pin: true,
          },
        });

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
        );

        animationTl.to('.paiBoard', {
          opacity: 0,
          scale: 0.5,
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
        );

        animationTl.to('.animation-container', {
          scale: 0.9,
          opacity: 0,
          duration: 1.5,
        });

        // --- Animation for the scrolling mission text section ---
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

        // --- END OF DESKTOP-ONLY ANIMATIONS ---
      });
    },
    { scope: main }
  );

  return (
    <>
      {/* RESPONSIVE: Reduced vertical space on mobile (space-y-20) and increased on desktop (lg:space-y-40) */}
      <div className="w-full space-y-20 lg:space-y-40" ref={main}>
        {/* RESPONSIVE: Adjusted padding for different screen sizes */}
        <div className="p-4 sm:p-10 lg:p-20 space-y-20 lg:space-y-40">
          <section className="relative mx-auto h-[80vh] lg:h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl z-10">
            {/* Video Background */}
            <div className="absolute w-full h-full z-[-1]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/hero_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

            {/* Hero Content */}
            <div className="relative z-10 text-center text-white px-4 content-wrapper">
              <div className="floatingText">
                {/* RESPONSIVE: Adjusted font size for mobile, tablet, and desktop */}
                <h1 className="text-5xl md:text-7xl lg:text-[80px] font-semibold leading-tight">
                  Minimize Cost.
                </h1>
              </div>
              <div className="maximizeBox">
                <h1 className="text-5xl md:text-7xl lg:text-[80px] font-semibold leading-tight mb-6 metallic-text">
                  Maximize Uptime.
                </h1>
                {/* RESPONSIVE: Buttons stack on mobile and are side-by-side on larger screens */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/get-started"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-base lg:text-lg transition-colors"
                  >
                    Book a Demo
                  </Link>
                  <Link
                    href="/get-started"
                    className="inline-flex items-center justify-center gap-2 border-white border-2 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-base lg:text-lg transition-colors"
                  >
                    Get Started
                    <span className="font-bold text-xl">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* RESPONSIVE: Height is auto on mobile (no pinning) and fixed on desktop for the animation */}
          <div className="animation-container relative z-20 h-auto lg:h-[120vh]">
            <div className="centered-content-for-desktop-animation relative lg:absolute top-1/4 left-0 w-full lg:h-screen lg:-translate-y-1/4 z-40">
              {/* Section 1 */}
              <section className="first-section relative lg:absolute top-1/2 lg:-translate-y-1/2 left-0 w-full py-16 lg:py-0">
                {/* RESPONSIVE: Stacks vertically on mobile, row on desktop. Added gap for spacing. */}
                <div className="three-column-wrapper flex flex-col lg:flex-row justify-between items-center h-full px-4 sm:px-8 gap-12 lg:gap-4">
                  <div className="paiInfo w-full lg:w-1/4 text-center lg:text-left">
                    <div className="space-y-8">
                      <div className="space-y-3">
                        <h2 className="text-3xl lg:text-[40px] metallic-text">
                          Pai Enterprise Sensor
                        </h2>
                        <p className="text-base font-normal">
                          All your power sources. One smart Sensor
                        </p>
                        <button className="btn-ghost">Learn More</button>
                      </div>
                      <div>
                        <Image
                          src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/factoriesBackground.jpg"
                          alt="factories"
                          width={250}
                          height={250}
                          className="mx-auto lg:mx-0"
                        />
                        <p className="mt-2">For Factories</p>
                      </div>
                    </div>
                  </div>

                  <div className="paiBoard w-full lg:w-1/2 flex items-center justify-center">
                    <Image
                      src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/pai_board.png"
                      width={420}
                      height={270}
                      alt="pai_board"
                      className="w-full max-w-md"
                    />
                  </div>

                  <div className="paiInfo w-full lg:w-1/4 text-center lg:text-left">
                    <div>
                      <Image
                        src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/hospitals.png"
                        alt="hospitals"
                        width={350}
                        height={200}
                        className="mx-auto lg:mx-0"
                      />
                      <p className="mt-2">For Hospitals</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              {/* RESPONSIVE: Hidden on mobile since it's part of a desktop-only animation */}
              <section className="second-section hidden lg:block absolute top-1/2 -translate-y-1/2 left-0 w-full h-screen">
                <div className="three-column-wrapper2 flex justify-between items-center h-full px-8">
                  <div className="paiInfo2 w-1/3">
                    <div className="space-y-12">
                      <div className="space-y-3">
                        <h2 className="text-[40px] metallic-text">
                          Pai Enterprise Dashboard
                        </h2>
                        <p className="text-base font-normal">
                          All energy insights, one view.
                        </p>
                        <button className="btn-ghost">Learn More</button>
                      </div>
                      <div>
                        <Image
                          src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/factories2.png"
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
                      src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/paiLaptop.png"
                      width={420}
                      height={270}
                      alt="pai_laptop"
                    />
                  </div>

                  <div className="paiInfo2 w-1/3 text-center">
                    <div>
                      <Image
                        src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/gym.png"
                        alt="gym"
                        width={350}
                        height={200}
                        className="mx-auto"
                      />
                      <p className="mt-2">For Gyms</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* RESPONSIVE: This section is now naturally responsive without animations on mobile */}
        <section className="scrollOver h-auto lg:h-[100vh] relative overflow-hidden">
          <div
            className="scrollOver1 relative lg:absolute top-0 w-full bg-no-repeat bg-center flex justify-start z-20"
            style={{
              backgroundImage:
                "url('https://ews-app-s3.s3.us-east-1.amazonaws.com/website/missionImage1.jpg')",
              height: '100vh',
              backgroundSize: 'cover',
              alignItems: 'flex-end',
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
            {/* RESPONSIVE: Drastically reduced padding on mobile */}
            <div className="relative z-10 text-left text-white p-8 md:p-16 lg:p-[148px]">
              <div className="mb-4">
                {/* RESPONSIVE: Adjusted font size */}
                <h2 className="text-3xl md:text-[40px] font-medium">
                  Unlocking Limitless
                </h2>
                <h2 className="text-3xl md:text-[40px] font-medium">
                  Human Productivity
                </h2>
              </div>
              <Link
                href="/get-started"
                className="mt-4 inline-flex items-center gap-2 border-white border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-base transition-colors"
              >
                Learn More
                <span className="font-bold text-xl">&rarr;</span>
              </Link>
            </div>
            <div className="absolute bottom-10  translate-x-1/2 z-10 text-center w-full">
              <Image
                src={chevronDown}
                alt="Chevron down"
                width={50}
                height={50}
              />
            </div>
          </div>

          <div
            className="scrollOver2 relative lg:absolute top-0 w-full bg-no-repeat bg-center flex justify-start z-10"
            style={{
              backgroundImage:
                "url('https://ews-app-s3.s3.us-east-1.amazonaws.com/website/missionImageChip.jpg')",
              height: '100vh',
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
            <div className="absolute bottom-0 z-10 text-left text-white p-8 md:p-16 lg:p-[148px]">
              <div className="mb-4">
                <h2 className="text-3xl md:text-[40px] font-medium">Through</h2>
                <h2 className="text-3xl md:text-[40px] font-medium">
                  Intelligent Energy
                </h2>
              </div>
              <Link
                href="/get-started"
                className="mt-4 inline-flex items-center gap-2 border-white border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-base transition-colors"
              >
                Learn More
                <span className="font-bold text-xl">&rarr;</span>
              </Link>
            </div>
            <div className="absolute bottom-10 translate-x-1/2 z-10 text-center w-full">
              <Image
                src={chevronDown}
                alt="Chevron down"
                width={50}
                height={50}
              />
            </div>
          </div>
        </section>
      </div>

      <section className="w-full">
        <Subscribe
          title=" Learn more about PowerLabs"
          subtitle="Get the latest PowerLabs news via email."
        />
      </section>

      {/* RESPONSIVE: Adjusted padding */}
      <div className="w-full p-8 sm:p-10 lg:p-20">
        <Footer />
      </div>
    </>
  );
};
