import Container from '@/components/container';
import HeroAmbassadors from './hero';
import FirstSection from './firstSection';
import ApplyAmbassador from './apply';
import BecomeAmbassador from './becomeAmbassador';
import FaqAmbassadorAccordion from './faq';
// import WaitlistSection from './waitListSection';
import Footer from '@/components/footer';

export default function Ambassadors() {
  return (
    <>
      <Container>
        <HeroAmbassadors />
        <FirstSection />
        <ApplyAmbassador />
        <BecomeAmbassador />
        <FaqAmbassadorAccordion />
        {/* <WaitlistSection /> */}
        <Footer />
      </Container>
    </>
  );
}
