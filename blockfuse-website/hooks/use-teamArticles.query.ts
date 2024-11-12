
// import { useQuery } from "@tanstack/react-query";
// import http from "../services/http";  

// const useTeamArticlesQuery = (query:any) => {
//   const { data, error, isLoading, isSuccess } = useQuery({
//     queryKey: ["get_all_teams", query],
//     queryFn: http.httpGetTeamArticles,
//   });
  
//   return { 
//     getAllTeamArticlesData: data, 
//     getAllTeamArticlesError: error, 
//     isGetAllArticlesloading:isLoading, 
//     isGetAllTeamArticlesSuccess: isSuccess,
//    };
// };

// export default useTeamArticlesQuery;


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
