

export declare type TeamMember = {
  id: string;
  name: string;
  image: string;
  stack: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
  };
 
  
  export interface APIEvent {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    slug: string;
    start_date: string;
    end_date: string;
    createdAt: string;
    updatedAt: string;
    registration_link?: string;
    past_event_details?: {
      full_description: string;
      youtube_link?: string;
      gallery_images?: string[];
    };
  }
  
  export interface APIResponse {
    message: string;
    data: {
      events: APIEvent[];
      pagination: {
        total: number;
        per_page: number;
        current_page: number;
        total_pages: number;
        has_next_page: boolean;
        has_prev_page: boolean;
      };
      filters: Record<string, unknown>;
      sorting: {
        sortBy: string;
        sortOrder: string;
      };
    };
  }
  
  export interface ProcessedEvent {
    id: number;
    title: string;
    date: string;
    image: string;
    description: string;
    link: string;
    registration_link: string;
    endDate: Date;
    slug: string;
    past_event_details?: {
      full_description: string;
      youtube_link?: string;
      gallery_images?: string[];
    };
  }
  
  export interface SortedEvents {
    upcoming: ProcessedEvent[];
    past: ProcessedEvent[];
  }

  export interface BlogPost {
    id: string;
    title: string;
    content: string;
    image: string;
    author: string;
    authorAvatar: string;
    createdAt: string;
    updatedAt: string;
    description?: string;
    slug: string;
  }
  
  export interface APIError {
    message: string;
    status?: number;
  }

  export interface GithubRepository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    owner: {
      login: string;
      avatar_url: string;
    };
    topics: string[];
    homepage: string;
  }

 
export interface Testimonial {
  id: number;
  fullname: string;
  image: string;
  testimony: string;
  createdAt: string;
  updatedAt: string;
}

export interface TestimonialsApiResponse {
  data: Testimonial[];
}

export interface ImageComponentProps {
  width: number | string;
  height: number | string;
  className?: string;
}

export interface Contributor {
  name: string;
  twitterHandle: string;
  amount: string;
  timestamp: string;
  txHash: string;
}
