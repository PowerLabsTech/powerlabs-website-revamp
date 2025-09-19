'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/all';
import Container, { HeroContainer } from '@/components/container';
import { useRouter } from 'next/navigation';
import { pathsRoute } from './routes';
import Button from '@/components/button';
import HeroButtons from '@/components/heroButtons';

export const Hero = () => {
  const main = useRef(null);
  const router = useRouter();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      // (min-width: 1024px) is for desktop
      mm.add('(min-width: 1024px)', function () {
        // --- ALL DESKTOP-ONLY ANIMATIONS GO HERE ---

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.maximizeBox',
            pin: '.content-wrapper',
            start: 'center center',
            end: '+=1400',
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
        gsap.set('.paiInfo2', { autoAlpha: 0 });
        gsap.set('.paiLaptop', { autoAlpha: 0 });

        gsap.set('.second-section', { pointerEvents: 'none' });

        // Ensure the first section is interactive
        gsap.set('.first-section', { pointerEvents: 'auto' });

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
            autoAlpha: 1,
            y: 0,
            stagger: 0.2,
            duration: 1.5,
            ease: 'power2.out',
            pointerEvents: 'auto',
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
            autoAlpha: 1,
            opacity: 1,
            duration: 1,
          },
          '<'
        );

        animationTl.to(
          '.first-section',
          {
            pointerEvents: 'none',

            duration: 1,
          },
          '<'
        );
        animationTl.to(
          '.paiInfo',
          {
            autoAlpha: 0,
            duration: 1,
            pointerEvents: 'none',
          },
          '<'
        );

        animationTl.to(
          '.second-section',
          {
            pointerEvents: 'auto',
            duration: 1,
          },
          '<'
        );
        animationTl.to(
          '.paiInfo2',
          {
            autoAlpha: 1,
            duration: 1,
            pointerEvents: 'auto',
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

      //  for mobile
      mm.add('(max-width:1023px)', function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.hardware-mobile',
            start: 'top 80%',
            end: '+=600',
            scrub: 1.2,
          },
        });

        tl.from('.hardware', {
          scale: 0.5,
          opacity: 0,
          ease: 'none',
        });

        const softtl = gsap.timeline({
          scrollTrigger: {
            trigger: '.software-mobile',
            start: 'top 80%',
            end: '+=600',
            scrub: 1.2,
          },
        });

        softtl.from('.laptop', {
          scale: 0.5,
          opacity: 0,
          ease: 'none',
        });
      });
    },
    { scope: main }
  );

  return (
    <>
      {/* RESPONSIVE: Reduced vertical space on mobile (space-y-20) and increased on desktop (lg:space-y-40) */}
      <div className="w-full space-y-20 lg:space-y-40" ref={main}>
        {/* RESPONSIVE: Adjusted padding for different screen sizes */}
        <div className="space-y-20 lg:space-y-40">
          <HeroContainer>
            <section className="relative mx-auto h-[80vh] lg:h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl z-10 ">
              {/* Video Background */}
              <div className="absolute w-full h-full z-[-1]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  poster="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/heroThumbnail.jpg"
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
                  <h1 className="text-4xl md:text-7xl lg:text-[80px] font-semibold leading-tight">
                    Minimize Cost.
                  </h1>
                </div>
                <div className="maximizeBox">
                  <h1 className="text-4xl md:text-7xl lg:text-[80px] font-semibold leading-tight mb-6 metallic-text">
                    Maximize Uptime.
                  </h1>
                  {/* RESPONSIVE: Buttons stack on mobile and are side-by-side on larger screens */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <HeroButtons />
                  </div>
                </div>
              </div>
            </section>
          </HeroContainer>

          <Container>
            {/* RESPONSIVE: Height is auto on mobile (no pinning) and fixed on desktop for the animation */}
            <div className="animation-container relative z-20 h-auto lg:h-[120vh] hidden lg:block">
              <div className="centered-content-for-desktop-animation relative lg:absolute top-1/4 left-0 w-full lg:h-screen lg:-translate-y-1/4 z-40">
                {/* Section 1 */}
                <section className="first-section relative lg:absolute top-1/2 lg:-translate-y-1/2 left-0 w-full py-16 lg:py-0">
                  {/* RESPONSIVE: Stacks vertically on mobile, row on desktop. Added gap for spacing. */}
                  <div className="three-column-wrapper flex flex-col lg:flex-row justify-between items-center h-full px-4 sm:px-8 gap-12 lg:gap-4">
                    {/*  */}
                    <div className="w-full lg:w-1/3 p-4 flex flex-col text-center lg:text-left paiInfo">
                      {/* This top section will grow to fill any extra vertical space */}
                      <div className="flex-grow ">
                        <h2 className="text-2xl lg:text-3xl metallic-text mb-1">
                          Pai Enterprise Sensor
                        </h2>
                        <p className="text-base font-normal mb-10">
                          All your power sources. One smart Sensor
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => router.push(pathsRoute.hardware)}
                        >
                          Learn More
                        </Button>
                      </div>

                      {/* This bottom section will be pushed down, aligning with card */}
                      <div className="mt-12">
                        <div className="relative w-[250px] h-[250px] mx-auto lg:mx-0 overflow-hidden rounded-md">
                          <Image
                            src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/factoriesBackground.jpg"
                            alt="factories"
                            objectFit="cover"
                            layout="fill"
                            className="mx-auto lg:mx-0"
                          />
                        </div>
                        <p className="mt-2">For Factories</p>
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
                    {/*  */}
                    <div className="w-full lg:w-1/3 p-4 flex flex-col text-center lg:text-left paiInfo2">
                      {/* This top section will grow to fill any extra vertical space */}
                      <div className="flex-grow ">
                        <h2 className="text-2xl lg:text-3xl metallic-text mb-1">
                          Pai Enterprise Dashboard
                        </h2>
                        <p className="text-base font-normal mb-10">
                          All energy insights, one view.
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => router.push(pathsRoute.software)}
                        >
                          Learn More
                        </Button>
                      </div>

                      {/* This bottom section will be pushed down, aligning with card */}
                      <div className="mt-12">
                        <div className="relative w-[250px] h-[250px] mx-auto lg:mx-0 overflow-hidden rounded-md">
                          <Image
                            src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/factories2.png"
                            alt="factories2"
                            objectFit="cover"
                            layout="fill"
                            className="mx-auto lg:mx-0"
                          />
                        </div>
                        <p className="mt-2">For Factories</p>
                      </div>
                    </div>

                    <div className="paiLaptop w-1/3 flex items-center justify-center">
                      <Image
                        src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/paiLaptop.png"
                        width={420}
                        height={270}
                        alt="pai_laptop"
                        loading="lazy"
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

            {/* mobile */}
            <div className="lg:hidden space-y-40 mb-30">
              {/* hardware */}
              <div>
                <div className="hardware-mobile">
                  <div className="flex flex-col items-center justify-center ">
                    <h2 className="text-2xl lg:text-3xl metallic-text mb-1">
                      Pai Enterprise Sensor
                    </h2>
                    <p className="text-base font-normal mb-4 ">
                      All your power sources. One smart Sensor
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => router.push(pathsRoute.hardware)}
                    >
                      Learn More
                    </Button>
                  </div>

                  <div className="flex justify-center mt-10 hardware">
                    <Image
                      src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/pai_board.png"
                      width={420}
                      height={270}
                      alt="pai_board"
                      className="w-full max-w-md"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* software */}

              <div className="software-mobile">
                <div className="flex flex-col items-center justify-center ">
                  <h2 className="text-2xl lg:text-3xl metallic-text mb-1">
                    Pai Enterprise Dashboard
                  </h2>
                  <p className="text-base font-normal mb-4 ">
                    All energy insights, one view.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => router.push(pathsRoute.software)}
                  >
                    Learn More
                  </Button>
                </div>

                <div className="flex justify-center mt-10 laptop">
                  <Image
                    src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/paiLaptop.png"
                    width={420}
                    height={270}
                    alt="pai_board"
                    className="w-full max-w-md"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};
