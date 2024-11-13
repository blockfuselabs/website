
<<<<<<< HEAD
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import http from "../services/http";
import { AlumniResponse } from "../types/generated";

const useAlumniQuery = (cohortId: number | string): UseQueryResult<AlumniResponse> => {
  return useQuery<AlumniResponse>({
    queryKey: ["get_all_alumni", cohortId],
    queryFn: () => http.httpGetAllAlumni(cohortId),
    enabled: !!cohortId, 
  });
};

export default useAlumniQuery;
=======
import { useQuery } from "@tanstack/react-query";
import http from "../services/http";  

const useAlumniQuery = () => {
  const { data, error, isLoading, isSuccess } = useQuery({
    queryKey: ["get_all_alumni"],
    queryFn: http.httpGetAllAlumni
  });
  
  return { 
    getAllAlumniData: data, 
    getAllAlumniError: error, 
    isGetAllAlumniloading:isLoading, 
    isGetAllAlumniSuccess: isSuccess,
    
   };
};

export default useAlumniQuery;
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
