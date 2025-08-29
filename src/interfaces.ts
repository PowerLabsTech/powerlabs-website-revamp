export interface IArticleData {
  id: number;
  attributes: {
    text: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    author: string;
    readingTime: number;
    tag: string;
    coverImage: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
  };
}

export interface IArticles {
  data: IArticleData[];
}
