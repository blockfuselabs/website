
export declare type TeamMember = {
  id: string;
  name: string;
  image: string;
  stack: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
  };
  export interface Alumni {
    id: number;
    cohort_id: number;
    fullname: string;
    image: string;
    github_link?: string;
    linkedin_link?: string;
    twitter_link?: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface AlumniResponse {
    alumnis: {
      count: number;
      rows: Alumni[];
    };
  }
 
export interface Article {
  id: number;
  author_id: number;
  author_type: string;
  team_member_id: number;
  title: string;
  content: string;
  image: string;
  slug: string;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface ArticlesResponse {
  data: {
    articles: Article[];
    pagination: {
      total: number;
      per_page: number;
      current_page: number;
      total_pages: number;
      has_next_page: boolean;
      has_prev_page: boolean;
    };
  };
}

  