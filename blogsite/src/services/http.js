import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://api.blockfuselabs.com/api/",
  headers: {
    accept: "application/json",
    "content-Type": "application/json",
  },
});

class BaseUrl {
  async httpGetArticleBySlug(slug) {
    try {
      const response = await AxiosInstance.get(`/articles/${slug}`);
      console.log("API Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  }

  async httpGetAllArticles() {
    try {
      const response = await AxiosInstance.get("/articles");
      console.log("API Response:", response.data);
      return response.data.data.articles;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  }
}

export default new BaseUrl();