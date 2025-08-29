import { IArticleData, IArticles } from '@/interfaces';
import axios from 'axios';

export const articleUrl = 'https://powerlabstech.com/blogger/api/publications';

export async function fetchArticles(page: number) {
  const url = `${articleUrl}?fields[0]=title&fields[1]=createdAt&populate[coverImage][fields][0]=url&populate[tag][fields][0]=name&sort[0]=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=6`;
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 3600, // Cache the result for 1 hour (3600 seconds)
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }

    return await response.json();
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
}

export async function fetchLatestArticle() {
  const url = `${articleUrl}&pagination[limit]=1&sort[0]=publishedAt:desc`;
  try {
    const response = await axios.get(url);
    return response.data as IArticles;
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
}

export async function fetchArticleById(id: string) {
  const url = `https://powerlabstech.com/blogger/api/publications/${id}?populate=*`;
  try {
    const response = await axios.get(url);
    return response.data as { data: IArticleData };
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
}
