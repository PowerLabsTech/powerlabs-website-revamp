import { NextResponse } from 'next/server';
import { fetchArticles, fetchShops, fetchEvents } from '@/services/cms';
import { pathsRoute } from '../routes';

export async function GET() {
  const baseUrl = 'https://powerlabstech.com';

  //  Static pages
  const staticUrls = Object.values(pathsRoute).map((path) => ({
    loc: `${baseUrl}${path}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
  }));

  //  Blog posts
  const articlesResponse = await fetchArticles(1, 1000);
  const articles = articlesResponse?.data || [];
  const blogUrls = articles.map((article: any) => ({
    loc: `${baseUrl}/resources/blog/posts/${article.attributes.slug}`,
    lastmod: article.attributes.updatedAt || new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.9,
  }));

  //  Shops
  const shopsResponse = await fetchShops();
  const shops = shopsResponse?.data || [];
  const shopUrls = shops.map((shop: any) => ({
    loc: `${baseUrl}/community/shop/${shop.attributes.slug}`,
    lastmod: shop.attributes.updatedAt || new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.9,
  }));

  // Events
  const eventsResponse = await fetchEvents();
  const events = eventsResponse?.data || [];
  const eventUrls = events.map((event: any) => ({
    loc: `${baseUrl}/community/events/${event.attributes.slug}`,
    lastmod: event.attributes.updatedAt || new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.9,
  }));

  const urls = [...staticUrls, ...blogUrls, ...shopUrls, ...eventUrls];

  //  Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      ({ loc, lastmod, changefreq, priority }) => `
    <url>
      <loc>${loc}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
