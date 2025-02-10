import NewService from "../services/new.service.js";

class NewsController {
  constructor() {
    this.newService = new NewService();
  }

  async getAllNewsController(req, res) {
    try {
      const news = await this.newService.getAllNews();
      res.json(news);
    } catch (error) {
      console.error(error.massage);
    }
  }

  async getNewsByCategoryController(req, res) {
    const { name } = req.params;
    const user = await this.newService.getNewsByCategory(String(name));
    if (user) res.json(user);
    else
      res
        .status(400)
        .json({ message: "Kategoriya boyicha yangilik topilmadi" });
  }

  async getNewsByIdController(req, res) {
    const { id } = req.params;
    const user = await this.newService.getNewsById(Number(id));
    if (user) res.json(user);
    else res.status(400).json({ message: "Yangilik topilmadi" });
  }

  async addNewsController(req, res) {
    try {
      const news = await this.newService.addNews(news);
    } catch (error) {
      console.error(error.message);
    }
  }
  async searchNewsController(req, res) {
    const { query } = req.body;
    const result = await this.newService.searchNews(query);
    res.json(result);
  }
}

export default NewsController;
