'use client';
import { Subscribe } from '@/app/subscribe';
import FaqAccordion from './accordion';
import Hero from './hero';
import Sensor from './sensor';
import Footer from '@/components/footer';

export default function Hardware() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center sm:pt-10">
        <div className="w-full p-4 sm:p-10 lg:p-20 space-y-20 pt-12 lg:space-y-40">
          <Hero />
          <Sensor />
          <FaqAccordion />
          <Subscribe
            title="Get updates and insights"
            subtitle="Stay up to date on Pai Enterprise Sensor, new products, expert advice, and more."
          />
          <Footer />
        </div>
      </div>
    </>
  );
}
