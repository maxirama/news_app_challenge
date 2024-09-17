export interface IArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface INewsApiResponse {
  status: "loading" | "error" | "idle";
  totalResults: number;
  articles: IArticle[];
}

export interface INewsSlice {
  newsData: INewsApiResponse;
}
