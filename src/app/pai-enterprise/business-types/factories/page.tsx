'use client';
import Container, { HeroContainer } from '@/components/container';
// import VideoSection from './videoSection';
import { ContactSalesBanner } from '@/app/subscribe';
import Footer from '@/components/footer';
import FirstSection from './firstSection';
// import VideoSection from './videoSection';
import HeroFactories from './hero';

export default function Factories() {
  return (
    <>
      <HeroContainer>
        <HeroFactories />
      </HeroContainer>
      <Container>
        <FirstSection />
      </Container>
      {/* <VideoSection /> */}
      <Container>
        <ContactSalesBanner />
        <Footer />
      </Container>
    </>
  );
}
