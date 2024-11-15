import { useQuery, UseQueryResult } from "@tanstack/react-query";
import http from "../services/http";
import { ArticlesResponse } from "../types/generated"; 

const useTeamArticlesQuery = (teamMemberId: number | string): UseQueryResult<ArticlesResponse> => {
  return useQuery<ArticlesResponse>({
    queryKey: ["get_all_teams", teamMemberId],
    queryFn: () => http.httpGetTeamArticles(teamMemberId),
    enabled: !!teamMemberId, 
  });
};

export default useTeamArticlesQuery;