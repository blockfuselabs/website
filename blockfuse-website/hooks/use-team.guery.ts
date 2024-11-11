
import { useQuery } from "@tanstack/react-query";
import http from "../services/http";  

const useTeamQuery = () => {
  const { data, error, isLoading, isSuccess } = useQuery({
    queryKey: ["get_all_teams"],
    queryFn: http.httpGetAllTeam,
  });
  
  return { 
    getAllTeamData: data, 
    getAllTeamError: error, 
    isGetAllTeamloading:isLoading, 
    isGetAllTeamSuccess: isSuccess,
   };
};

export default useTeamQuery;
