'use client';

import Container from '@/components/container';
import HeroOutlet from './hero';
import LatestPost from './latestPosts';
import { Subscribe } from '@/app/subscribe';
import Footer from '@/components/footer';
import React, { useEffect } from 'react';
import { IArticleData } from '@/interfaces';
import { fetchArticles } from '@/utils/api';

export default function Outlets() {
  const [articles, setArticles] = React.useState<IArticleData[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchArticle = async () => {
    try {
      setIsLoading(true);

      const response = await fetchArticles(currentPage);
      if (!!response && response.data.length > 0) {
        setArticles(response.data);
      }
    } finally {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setIsLoading(true);
      const response = await fetchArticles(currentPage + 1);
      if (!!response && response.data.length > 0) {
        setArticles((prev) => [...prev, ...response.data]);
      }
    } finally {
      setIsLoading(false);
    }
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <>
      <Container>
        <HeroOutlet article={articles[0]} />
        <LatestPost
          articles={articles}
          handleLoadMore={handleLoadMore}
          loading={isLoading}
        />
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
