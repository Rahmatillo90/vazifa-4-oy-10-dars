import Io from "../../utils/Io.js";

class NewService {
  constructor() {
    this.io = new Io("src/data/news.json");
  }

  async getAllNews() {
    const news = await this.io.readFile();
    return news;
  }

  async getNewsByCategory(name) {
    const news = await this.getAllNews();
    return news.filter((item) => item.category === name);
  }

  async getNewsById(id) {
    const news = await this.getAllNews();
    return news.find((item) => item.id === id);
  }

  async searchNews() {
    const news = await this.getAllNews();
    return news;
  }

  async getAddNews(news) {
    return this.io.writeFille(news);
  }
}
export default NewService;
