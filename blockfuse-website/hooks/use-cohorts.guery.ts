
import { useQuery } from "@tanstack/react-query";
import http from "../services/http";  

const useCohortsQuery = () => {
  const { data, error, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["get_all_cohorts"],
    queryFn: http.httpGetAllCohorts
  });
  
  return { 
    getAllCohortsData: data, 
    getAllCohortsError: error, 
    getAllCohortsRefetch: refetch,
    isGetAllCohortsloading:isLoading, 
    isGetAllCohortsSuccess: isSuccess,
    isGetAllCohortsError: isError, 
   };
};

export default useCohortsQuery;