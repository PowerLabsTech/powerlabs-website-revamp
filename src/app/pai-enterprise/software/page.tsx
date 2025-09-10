'use client';
import Container from '@/components/container';
import HeroSoftware from './hero';
import Analytics from './analytics';
import Optimization from './optimization';
import Anomaly from './anomaly';
import UseCases from './useCases';
import { Subscribe } from '@/app/subscribe';
import Footer from '@/components/footer';
import { NEWS_LETTERS_TYPE } from '@/enums';

export default function Software() {
  return (
    <>
      <Container>
        <HeroSoftware />
        <Analytics />
        <Optimization />
        <Anomaly />
        <UseCases />
        <Subscribe
          title="Get updates and insights"
          subtitle="Stay up to date on Pai Enterprise Sensor, new products, expert advice, and more."
          newsLetterType={NEWS_LETTERS_TYPE.TECHNICAL}
        />
        <Footer />
      </Container>
    </>
  );
}
