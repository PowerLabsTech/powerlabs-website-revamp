import {
  IArticleData,
  IArticles,
  ICareers,
  IEvents,
  IShop,
} from '@/interfaces';
import axios from 'axios';

const cmsURL = 'https://blog.powerlabstech.com/blogger';

export const articleUrl = `${cmsURL}/api/publications`;
export const podcastsUrl = `${cmsURL}/api/podcasts`;
export const shopsUrl = `${cmsURL}/api/shops`;
export const shopCategoriesUrl = `${cmsURL}/api/shop-categories`;
export const eventsUrl = `${cmsURL}/api/events`;
export const careersUrl = `${cmsURL}/api/careers`;

export async function fetchArticles(page: number) {
  const url = `${articleUrl}?fields[0]=title&fields[1]=createdAt&fields[2]=author&fields[3]=readingTime&fields[4]=date&populate[coverImage][fields][0]=url&populate[tag][fields][0]=name&sort[0]=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=6`;
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
  const url = `${articleUrl}/${id}?populate=*`;
  try {
    const response = await axios.get(url);
    return response.data as { data: IArticleData };
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
}

//  podcasts
export async function fetchPodcasts() {
  const url = `${podcastsUrl}?sort[0]=publishedAt:desc&populate[coverImage][fields][0]=url`;

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

// shops
export async function fetchShops() {
  const url = `${shopsUrl}?fields[0]=collectionName&fields[1]=createdAt&fields[2]=summary&fields[3]=link&fields[4]=announcement&populate[coverImage][fields][0]=url&populate[tag][fields][0]=name&sort[0]=publishedAt:desc&pagination[page]=1&pagination[pageSize]=6`;
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

export async function fetchShopsById(id: string) {
  const url = `${shopsUrl}/${id}?populate=*`;
  try {
    const response = await axios.get(url);
    return response.data as { data: IShop };
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
}

export async function fetchShopCategories() {
  const url = `${shopCategoriesUrl}?sort[0]=publishedAt:desc&populate[coverImage][fields][0]=url`;
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

// events
export async function fetchEvents() {
  const url = `${eventsUrl}?fields[0]=title&fields[1]=createdAt&fields[2]=summary&fields[3]=announcement&populate[coverImage][fields][0]=url&sort[0]=publishedAt:desc&pagination[page]=1&pagination[pageSize]=6`;
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

export async function fetchEventsById(id: string) {
  const url = `${eventsUrl}/${id}?populate=*`;
  try {
    const response = await axios.get(url);
    return response.data as { data: IEvents };
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
}

//fetch careers
export async function fetchCareers() {
  const url = `${careersUrl}?populate=*`;
  try {
    const response = await axios.get(url);
    return response.data as { data: ICareers[] };
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
}
