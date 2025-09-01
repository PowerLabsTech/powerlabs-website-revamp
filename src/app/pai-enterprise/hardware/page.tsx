'use client';
import { Subscribe } from '@/app/subscribe';
import FaqAccordion from './accordion';
import Hero from './hero';
import Sensor from './sensor';
import Footer from '@/components/footer';
import Container from '@/components/container';

export default function Hardware() {
  return (
    <>
      <Container>
        <Hero />
        <Sensor />
        <FaqAccordion />
        <Subscribe
          title="Get updates and insights"
          subtitle="Stay up to date on Pai Enterprise Sensor, new products, expert advice, and more."
        />
        <Footer />
      </Container>
    </>
  );
}
