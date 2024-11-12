import { useQuery } from '@tanstack/react-query';
import BaseUrl from '../services/http';

interface APIEvent {
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
}

interface APIResponse {
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

const useEVENTSQuery = (enabled = true) => {
  const {
    data: EVENTS,
    error: EVENTSError,
    isLoading: isEVENTSLoading,
    isSuccess: isEVENTSSuccess
  } = useQuery<APIResponse>({
    queryKey: ['events'],
    queryFn: BaseUrl.httpGetAllEvents,
    enabled,
    retry: 2,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false
  });

  return {
    EVENTS,
    EVENTSError,
    isEVENTSLoading,
    isEVENTSSuccess
  };
};

export default useEVENTSQuery;