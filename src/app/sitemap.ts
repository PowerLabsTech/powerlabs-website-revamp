import { fetchArticles } from '@/services/cms';
import { pathsRoute } from './routes';

export default async function sitemap() {
  const staticUrls = Object.values(pathsRoute).map((path) => ({
    url: `https://powerlabstech.com${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Fetch all blog posts from Strapi
  const articlesResponse = await fetchArticles(1, 1000); // FETCH UP TO 1000 POSTS
  const articles = articlesResponse?.data || [];

  const blogUrls = articles.map((article: any) => {
    const slug = article.attributes.slug;

    return {
      url: `https://powerlabstech.com/resources/blog/posts/${slug}`,
      lastModified: article.attributes.updatedAt || new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    };
  });

  return [...staticUrls, ...blogUrls];
}
