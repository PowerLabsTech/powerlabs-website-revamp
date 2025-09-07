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
    summary: string;
    avatar: string;
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

export interface IPod {
  id: number;
  attributes: {
    title: string;
    summary: string;
    spotify: string;
    youtube: string;
    audiomack: string;
    applePod: string;
    amazon: string;
    announcement: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
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

export interface IShop {
  id: number;
  attributes: {
    collectionName: string;
    createdAt: string;
    summary: string;
    post: string;
    link: string;
    announcement: string;
    updatedAt: string;
    publishedAt: string;
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

export interface IShopCategory {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    link: string;
    description: string;
    updatedAt: string;
    publishedAt: string;
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
export interface IEvents {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    post: string;
    summary: string;
    updatedAt: string;
    publishedAt: string;
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
