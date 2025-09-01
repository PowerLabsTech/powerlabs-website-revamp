'use client';
import Container, { HeroContainer } from '@/components/container';
// import VideoSection from './videoSection';
import { Subscribe } from '@/app/subscribe';
import Footer from '@/components/footer';
import HeroGyms from './hero';
import FirstSection from './firstSection';
import VideoSection from './videoSection';

export default function Hospitals() {
  return (
    <>
      <HeroContainer>
        <HeroGyms />
      </HeroContainer>
      <Container>
        <FirstSection />
      </Container>
      <VideoSection />
      <Container>
        {/* blogs */}
        <Subscribe
          title="Learn more about PowerLabs"
          subtitle="Get the latest PowerLabs news via email."
        />
        <Footer />
      </Container>
    </>
  );
}
