'use client';

import Container from '@/components/container';
import HeroOutlet from './hero';
import LatestPost from './latestPosts';
import { Subscribe } from '@/app/subscribe';
import Footer from '@/components/footer';

export default function Outlets() {
  return (
    <>
      <Container>
        <HeroOutlet />
        <LatestPost />
      </Container>
      <Subscribe
        title="Learn more about PowerLabs"
        subtitle="Get the latest PowerLabs news via email."
      />
      <Container>
        <Footer />
      </Container>
    </>
  );
}
