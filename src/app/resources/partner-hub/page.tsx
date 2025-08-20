'use client';
import Container from '@/components/container';
import HeroPatnerHub from './hero';
import Brochure from './brochure';
import { Subscribe } from '@/app/subscribe';
import Footer from '@/components/footer';

export default function PartnerHub() {
  return (
    <>
      <Container>
        <HeroPatnerHub />
        <Brochure />
        <Subscribe
          title="Learn more about PowerLabs"
          subtitle="Get the latest PowerLabs news via email."
        />
        <Footer />
      </Container>
    </>
  );
}
