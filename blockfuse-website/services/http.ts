import axios from "axios"
import routes from "./routes"


const AxiosInstance = axios.create({
baseURL: "https://dev.basicpayng.com/api/",
headers:{
    accept: "application/json",
    "content-Type": "application/json",
},
})

class BaseUrl {
    httpGetAllTeam = async () => {
        try {
            const response = await AxiosInstance.get(routes.TEAM);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    async httpGetArticleById(id) {
        try {
            const response = await AxiosInstance.get(`${routes.ARTICLES}/${id}`);
            return response.data.article;
        } catch (error) {
            console.error("API Error:", error);
            throw error;
        }
    };


      
    
    async httpGetAllArticles() {
        try {
            const response = await AxiosInstance.get(routes.ARTICLES);
            console.log("API Response:", response.data);
            return response.data.data.articles;
        } catch (error) {
            console.error("API Error:", error);
            throw error;
        }
    }

    async httpGetAllTestimonies() {
        try {
            const response = await AxiosInstance.get(routes.TESTIMONIAL);
            console.log("API Response:", response.data);
            return response.data.data.testimonies;
        } catch (error) {
            console.error("API Error:", error);
            throw error;
        }
    }

    async httpGetAllFAQS() {
        try {
            const url = routes.FAQS;
            console.log("Calling full URL:", `${import.meta.env.VITE_API_URL}${url}`);
            
            const response = await AxiosInstance.get(url);
            console.log("API Response:", response.data);
            return response.data.data.faqs;
        } catch (error) {
            console.error("API Error:", error);
            throw error;
        }
    }

    async httpGetAllEvents() {
        try {
            const response = await AxiosInstance.get(routes.EVENTS);
            console.log("API Response:", response.data);
            return response.data.data.events;
        } catch (error) {
            console.error("API Error:", error);
            throw error;
        }
    }
    
    async httpGetAllApplications() {
        try {
            const response = await AxiosInstance.get(routes.APPLICATION);
            console.log("API Response:", response.data);
            return response.data.data.applications;
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

    httpGetAllCohorts = async () => {
        try {
            const response = await AxiosInstance.get(routes.COHORTS)
            return response.data
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async httpPostApplication(formData) {
        try {
          const response = await AxiosInstance.post(routes.APPLICATION, formData);
          return response.data;
        } catch (error) {
          console.error('API Error:', error);
          throw error;
        }
      }
    
}

export default new BaseUrl();