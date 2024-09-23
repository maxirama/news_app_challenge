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
  status: "loading" | "failed" | "idle";
  totalResults: number;
  articles: IArticle[];
}

export interface INewsSlice {
  newsData: INewsApiResponse;
  noResultsObtained: boolean;
  selectedArticle: IArticle | {};
  searchValue: string;
  firstRender: boolean;
}

export interface IFiltersSlice {
  selectedLanguage: string;
}

export interface IPaginationSlice {
  currentPage: number;
  currentStartPage: number;
  currentEndPage: number;
  currentPageRange: number[];
  totalPages: number;
}
