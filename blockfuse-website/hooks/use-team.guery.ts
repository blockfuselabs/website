
import { useQuery } from "@tanstack/react-query";
import http from "../services/http";  

const useTeamQuery = (query: any) => {
  const { data, error, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["get_all_teams", query],
    queryFn: http.httpGetAllTeam,
    enabled: !!query,
  });
  
  return { 
    getAllTeamData: data, 
    getAllTeamError: error, 
    getAllTeamRefetch:refetch,
    isGetAllTeamloading:isLoading, 
    isGetAllTeamSuccess: isSuccess,
    isGetAllTeamError: isError, 
   };
};

export default useTeamQuery;
