import axios from "axios"
import routes from "./routes"
import {Team, Registeration} from "../types/generated";
import { log } from "console";


const AxiosInstance = axios.create({
baseURL: process.env.NEXT_PUBLIC_API_URL,
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

    httpRegistration = async (data: Registeration) => {
        try {
          const response = await AxiosInstance.post(routes.REGISTER, data)
          console.log(response)
          return response.data
        } catch (error) {
          throw error
        }
      }
      
}
  export default new BaseUrl()