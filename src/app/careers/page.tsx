'use client';
import Container, { HeroContainer } from '@/components/container';
import Hero from './hero';
import FirstSection from './firstSection';
// import ResidensidencyProgram from './residency';
import Footer from '@/components/footer';
import OpenRoles from './openRoles';
import { Subscribe } from '../subscribe';
import { NEWS_LETTERS_TYPE } from '@/enums';

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
      {/* <ResidensidencyProgram /> */}
      <Subscribe
        title="Break Things. Responsibly"
        subtitle="Don’t see any role that interests you? Join the Blue List and be the first to know about open roles."
        newsLetterType={NEWS_LETTERS_TYPE.CAREERS}
        buttonText="Join the Blue List"
      />
      <Container>
        <Footer />
      </Container>
    </>
  );
}
