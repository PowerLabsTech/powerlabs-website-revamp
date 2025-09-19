'use client';
import { Subscribe } from '@/app/subscribe';
import FaqAccordion from './accordion';
import Hero from './hero';
import Sensor from './sensor';
import Footer from '@/components/footer';
import Container from '@/components/container';
import { NEWS_LETTERS_TYPE } from '@/enums';

export default function Hardware() {
  return (
    <>
      <Container>
        <Hero />
        <Sensor />
        <FaqAccordion />
        <Subscribe
          title="Get updates and insights"
          subtitle="Sign up to get updates on new product launches and feature updates."
          newsLetterType={NEWS_LETTERS_TYPE.TECHNICAL}
        />
        <Footer />
      </Container>
    </>
  );
}
