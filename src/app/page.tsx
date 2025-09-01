'use client';
import Container from '@/components/container';
import { Hero } from './hero';
import MissionSection from './missionSection';
import { Subscribe } from './subscribe';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Hero />
      <MissionSection />
      <Container>
        <Subscribe
          title=" Learn more about PowerLabs"
          subtitle="Get the latest PowerLabs news via email."
        />

        <Footer />
      </Container>
    </>
  );
}
