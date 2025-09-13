'use client';
import Container, { HeroContainer } from '@/components/container';
import HeroHopsitals from './hero';
import FirstSection from './firstSection';
// import VideoSection from './videoSection';
import { ContactSalesBanner } from '@/app/subscribe';
import Footer from '@/components/footer';

export default function Hospitals() {
  return (
    <>
      <HeroContainer>
        <HeroHopsitals />
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
