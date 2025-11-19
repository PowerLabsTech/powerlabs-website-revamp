'use client';

import React, { useState } from 'react';
import { IArticleData } from '@/interfaces';
import { fetchArticles } from '@/services/cms';
import LatestPost from './latestPosts';

export default function LatestPostLoader({
  initialArticles,
}: {
  initialArticles: IArticleData[];
}) {
  const [articles, setArticles] = useState<IArticleData[]>(initialArticles);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    setLoading(true);
    const nextPage = currentPage + 1;
    const response = await fetchArticles(nextPage);
    if (response.data.length > 0) {
      setArticles((prev) => [...prev, ...response.data]);
      setCurrentPage(nextPage);
    }
    setLoading(false);
  };

  return (
    <LatestPost
      articles={articles}
      handleLoadMore={loadMore}
      loading={loading}
    />
  );
}
