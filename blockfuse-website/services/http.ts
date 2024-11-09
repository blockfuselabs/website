import axios from "axios"
import routes from "./routes"

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
            throw error
        }
    }
}
  export default new BaseUrl()