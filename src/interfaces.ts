export interface IArticleData {
  id: number;
  attributes: {
    text: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    author: string;
    authorRole: string;
    readingTime: number;
    summary: string;
    slug: string;
    avatar: {
      data: { id: number; attributes: { url: string } };
    };
    date: string;
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
    slug: string;
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
    slug: string;
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
    slug: string;
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
    slug: string;
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

export interface ICareers {
  id: number;
  attributes: {
    role: string;
    department: string;
    location: string;
    type: string;
    link: string;
    publishedAt: string;
  };
}
