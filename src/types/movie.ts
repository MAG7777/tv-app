export interface IMovie {
    Id: string;
    Title: string;
    CoverImage: string;
    TitleImage: string;
    Date: string;
    ReleaseYear: string;
    MpaRating: string;
    Category: string;
    Duration: string; // in seconds
    VideoUrl?: string; // optional for featured
    Description: string;
  }
  
  export interface IData {
    Featured: IMovie;
    TrendingNow: IMovie[];
  }