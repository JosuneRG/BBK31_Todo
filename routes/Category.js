const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

//1 - Ruta de crear tabla
// http://localhost:3000/categories/create
router.get('/create', CategoryController.createTable);

//2 - Ruta de agregar categorias
// http://localhost:3000/categories/addCategory
router.get('/addCategory', CategoryController.addCategory);

//3 - Ruta de ver todas las categorías junto a los productos que tienen
// http://localhost:3000/categories/getAllCategoryProduct
router.get('/getAllCategoryProduct', CategoryController.getAllCategoryProduct);

//4 - Ruta para ver como devuelve una categoría por id
// http://localhost:3000/categories/getById/1
router.get('/getById/id/:id', CategoryController.getById);

//5 - Ruta para buscar categoría por nombre
// http://localhost:3000/categories/getByName/Pepa
router.get('/getByName/name/:nameProduct', CategoryController.getByName);