import axios from "axios"
import routes from "./routes"


const AxiosInstance = axios.create({
baseURL: "https://dev.basicpayng.com/api/",
headers:{
    accept: "application/json",
    "content-Type": "application/json",
},
})

class BaseUrl{
    httpGetAllTeam = async () => {
        try {
            const response = await AxiosInstance.get(routes.TEAM)
            return response.data
        } catch (error) {
            console.log(error);
            throw error
        }
    }


    httpGetAllAlumni = async () => {
        try {
            const URL = `${routes.ALUMNI}`
            const response = await AxiosInstance.get(URL)
            return response.data
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    httpGetTeamDetails = async () => {
        try {
            const response = await AxiosInstance.get(routes.TEAMDETAILS)
            return response.data
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    httpGetTeamArticles = async () =>{
        try {
            const response = await AxiosInstance.get(routes.TEAMARTICLES)
            return response.data
        } catch (error) {
            console.log(error);
            throw error
        }
    }

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
  export default new BaseUrl()