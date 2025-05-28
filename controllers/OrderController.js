const db = require('../config/database');

const OrderController = {

     // Crea la tabla 'pedidos' si no existe
      createTable: (req, res) => {
        const sql = `CREATE TABLE order (
          idOrder INT AUTO_INCREMENT PRIMARY KEY,
          nameCategory VARCHAR(255) NOT NULL
        )`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send("Tabla de pedido creada.");
        });
      },
    
      // Agrega pedidos a la tabla
      addOrder: (req, res) => {
        const { nameCategory } = req.body;
        const sql = "INSERT INTO order (nameCategory) VALUES (?)";
        db.query(sql, [nameCategory], (err, result) => {
          if (err) throw err;
          res.send("Pedido añadida correctamente");
        });
      },
}

// Exportamos el controlador para que pueda usarse en las rutas
module.exports = OrderController;