import { Router } from "express";
import NewsController from "../controllers/new.controller.js";

const newsRouter = Router();

const controller = new NewsController();

newsRouter.get("/api/news", (req, res) =>
  controller.getAllNewsController(req, res)
);

newsRouter.get("/api/news/category/:name", (req, res) =>
  controller.getNewsByCategoryController(req, res)
);

newsRouter.get("/api/news/:id", (req, res) =>
  controller.getNewsByIdController(req, res)
);

newsRouter.get("/api/news/search", (req, res) =>
  controller.searchNewsController(req, res)
);

newsRouter.post("/api/news", (req, res) =>
  controller.addNewsController(req, res)
);

export default newsRouter;
