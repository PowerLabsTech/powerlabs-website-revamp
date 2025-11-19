import Container from '@/components/container';
import HeroOutlet from './hero';
import { Subscribe } from '@/app/subscribe';
import Footer from '@/components/footer';
import { IArticleData } from '@/interfaces';
import { fetchArticles } from '@/services/cms';
import LatestPostLoader from './latestPostLoader';

export default async function Outlets() {
  // Fetch first page server-side
  const response = await fetchArticles(1);
  const articles: IArticleData[] = response.data || [];
  console.log('articles>>', articles);

  return (
    <>
      <Container>
        {articles.length > 0 && <HeroOutlet article={articles[0]} />}
        <LatestPostLoader initialArticles={articles} />
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
