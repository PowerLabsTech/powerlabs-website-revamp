'use client';
import Container, { HeroContainer } from '@/components/container';
import Hero from './hero';
import FirstSection from './firstSection';
import ResidensidencyProgram from './residency';
import Footer from '@/components/footer';
import { JoinBlueList } from './joinBlueList';

export default function Careers() {
  return (
    <>
      <HeroContainer>
        <Hero />
      </HeroContainer>
      <Container>
        <FirstSection />
      </Container>
      <ResidensidencyProgram />
      <JoinBlueList />
      <Container>
        <Footer />
      </Container>
    </>
  );
}
