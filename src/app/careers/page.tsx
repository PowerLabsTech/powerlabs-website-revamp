'use client';
import Container from '@/components/container';
import Hero from './hero';
import FirstSection from './firstSection';
import ResidensidencyProgram from './residency';
import { Subscribe } from '../subscribe';
import Footer from '@/components/footer';

export default function Careers() {
  return (
    <>
      <Container>
        <Hero />
        <FirstSection />
      </Container>
      <ResidensidencyProgram />
      <Subscribe
        title="Break Things. Responsibly"
        subtitle="Don’t see any role that interests you? Join the Blue List and be the first to know about open roles."
      />
      <Container>
        <Footer />
      </Container>
    </>
  );
}
