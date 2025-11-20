import { Subscribe } from '@/app/subscribe';
import HeroEvents from './hero';
import Footer from '@/components/footer';
import Container from '@/components/container';
import { NEWS_LETTERS_TYPE } from '@/enums';

export default function Events() {
  return (
    <>
      <HeroEvents />
      <Subscribe
        title="Subscribe to stay up to date with our latest events"
        subtitle="Get the latest PowerLabs news via email."
        newsLetterType={NEWS_LETTERS_TYPE.EVENTS}
      />
      <Container>
        <Footer />
      </Container>
    </>
  );
}
