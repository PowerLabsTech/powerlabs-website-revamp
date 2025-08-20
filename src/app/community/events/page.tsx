'use client';
import { Subscribe } from '@/app/subscribe';
import HeroEvents from './hero';
import Footer from '@/components/footer';

export default function Events() {
  return (
    <>
      <HeroEvents />
      <Subscribe
        title="Subscribe to stay up to date with our latest events"
        subtitle="Get the latest PowerLabs news via email."
      />
      <Footer />
    </>
  );
}
