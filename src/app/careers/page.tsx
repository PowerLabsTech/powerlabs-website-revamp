'use client';
import Container, { HeroContainer } from '@/components/container';
import Hero from './hero';
import FirstSection from './firstSection';
import ResidensidencyProgram from './residency';
import Footer from '@/components/footer';
import { JoinBlueList } from './joinBlueList';
import OpenRoles from './openRoles';

export default function Careers() {
  return (
    <>
      <HeroContainer>
        <Hero />
      </HeroContainer>
      <Container>
        <FirstSection />
        <OpenRoles />
      </Container>
      <ResidensidencyProgram />
      <JoinBlueList />
      <Container>
        <Footer />
      </Container>
    </>
  );
}
