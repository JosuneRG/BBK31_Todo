const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderyController');


//1 - Ruta de crear tabla
// http://localhost:3000/categories/create
router.get('/create', OrderController.createTable);

//2 - Ruta de agregar pedido
// http://localhost:3000/categories/addCategory
router.get('/addCategory', OrderController.addCategory);
