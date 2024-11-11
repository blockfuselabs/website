
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