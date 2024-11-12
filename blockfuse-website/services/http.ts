import axios from "axios"
import routes from "./routes"
import { ArticlesResponse, AlumniResponse } from "../types/generated";


const AxiosInstance = axios.create({
    baseURL: "https://dev.basicpayng.com/api/",
    headers: {
        accept: "application/json",
        "content-Type": "application/json",
    },
})

class BaseUrl {
    httpGetAllTeam = async () => {
        try {
            const response = await AxiosInstance.get(routes.TEAM)
            return response.data
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    httpGetAllAlumni = async (cohortId: number | string): Promise<AlumniResponse> => {
        try {
          const response = await AxiosInstance.get<AlumniResponse>(`${routes.ALUMNI}/${cohortId}`);
          return response.data;
        } catch (error) {
          console.error("Failed to fetch alumni data:", error);
          throw error;
        }
      };
      
    httpGetTeamDetails = async () => {
        try {
            const response = await AxiosInstance.get(routes.TEAMDETAILS)
            return response.data
        } catch (error) {
            console.log(error);
            throw error
        }
    }


    httpGetTeamArticles = async (teamMemberId: number | string): Promise<ArticlesResponse> => {
        try {
          const response = await AxiosInstance.get<ArticlesResponse>(`${routes.TEAMARTICLES}/${teamMemberId}`);
          return response.data;
        } catch (error) {
          console.error("Failed to fetch team articles:", error);
          throw error;
        }
      };
    httpGetAllCohorts = async () => {
        try {
            const response = await AxiosInstance.get(routes.COHORTS)
            return response.data
        } catch (error) {
            console.log(error);
            throw error
        }

    }
}
export default new BaseUrl();