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
        subtitle="Stay in the loop on career opportunities and company updates."
        newsLetterType={NEWS_LETTERS_TYPE.CAREERS}
        buttonText="Subscribe"
      />
      <Container>
        <Footer />
      </Container>
    </>
  );
}
