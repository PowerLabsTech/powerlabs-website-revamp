'use client';
import Container from '@/components/container';
import HeroCompany from './hero';
import Mission from './mission';
import SharedBelief from './sharedBelief';
import BuildTogether from './buildTogether';
import { Subscribe } from '../subscribe';
import Footer from '@/components/footer';

export default function CompanyPage() {
  return (
    <>
      <Container>
        <HeroCompany />
        <Mission />
        <SharedBelief />
      </Container>
      <BuildTogether />
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
