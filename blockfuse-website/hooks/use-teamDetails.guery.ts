
import { useQuery } from "@tanstack/react-query";
import http from "../services/http";  

const useTeamDetailsQuery = () => {
  const { data, error, isLoading, isSuccess } = useQuery({
    queryKey: ["get_all_teams"],
    queryFn: http.httpGetTeamDetails
  });
  
  return { 
    getAllTeamDetailsData: data, 
    getAllTeamDetailsError: error, 
    isGetAllTeamDetailsloading:isLoading, 
    isGetAllTeamDetailsSuccess: isSuccess,
   };
};

export default useTeamDetailsQuery;
