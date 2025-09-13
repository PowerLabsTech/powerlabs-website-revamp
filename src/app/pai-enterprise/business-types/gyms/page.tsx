'use client';
import Container, { HeroContainer } from '@/components/container';
// import VideoSection from './videoSection';
import { ContactSalesBanner } from '@/app/subscribe';
import Footer from '@/components/footer';
import HeroGyms from './hero';
import FirstSection from './firstSection';
// import VideoSection from './videoSection';

export default function Hospitals() {
  return (
    <>
      <HeroContainer>
        <HeroGyms />
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
