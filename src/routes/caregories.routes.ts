import { Router } from "express";

import { CategoriesRepository } from "../module/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../module/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository(); // Instanciando a entidade de manipulação de dados

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

export { categoriesRoutes };
