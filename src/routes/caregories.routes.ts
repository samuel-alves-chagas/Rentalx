import { Router } from "express";

import { CategoriesRepository } from "../module/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../module/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository(); // Instanciando a entidade de manipulação de dados

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  // Instanciando um serviço responsável pelas regras de negócio da rota, tirando essa responsabilidade dela
  const createCategoryService = new CreateCategoryService(categoriesRepository);

  // Executando o serviço de regras de negócio, fazendo com que a rota não precise saber qual é o processo de criação de uma categoria de carro
  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

export { categoriesRoutes };
