'use client';
import Container from '@/components/container';
import HeroHopsitals from './hero';
import FirstSection from './firstSection';
import VideoSection from './videoSection';
import { Subscribe } from '@/app/subscribe';
import Footer from '@/components/footer';

export default function Hospitals() {
  return (
    <>
      <Container>
        <HeroHopsitals />
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
