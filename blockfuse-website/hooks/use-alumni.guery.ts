
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
