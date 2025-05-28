const db = require('../config/database');

const CategoryController = {

   // Crea la tabla 'category' si no existe
  createTable: (req, res) => {
    const sql = `CREATE TABLE category (
      idCategory INT AUTO_INCREMENT PRIMARY KEY,
      nameCategory VARCHAR(255) NOT NULL
    )`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send("Tabla de categorías creada.");
    });
  },

  // Agrega una nueva categoría a la base de datos
  addCategory: (req, res) => {
    const { nameCategory } = req.body;
    const sql = "INSERT INTO category (nameCategory) VALUES (?)";
    db.query(sql, [nameCategory], (err, result) => {
      if (err) throw err;
      res.send("Categoría añadida correctamente");
    });
  },

  // El endpoint para ver todas las categorías junto a los productos que tienen
  getAllCategoryProduct: (req, res) => {
    db.query("SELECT * FROM category inner join product on category.idCategory == product.idCategory;", (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  },

  // Crea un endpoint que devuelva una categoría por id
  getById: (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM category WHERE id = ?";
    db.query(sql, [id], (err, result) => {
      if (err) throw err;
      if (result.length === 0) return res.status(404).send("Categoría no encontrada");
      res.json(result[0]);
    });
  },

  // Consulta para Filtro para buscar categoría por nombre
 getByName: (req, res) => {
    const { nameCategory } = req.body;
    const sql = "SELECT * FROM category WHERE nameCategory = ?";
    db.query(sql, [nameCategory], (err, result) => {
      if (err) throw err;
      
      if (result.length === 0) return res.status(404).send("Categoría no encontrada");
        res.json(result[0]);
    });
  }
};

// Exportamos el controlador para que pueda usarse en las rutas
module.exports = CategoryController;
