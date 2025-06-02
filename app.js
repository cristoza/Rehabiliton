const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Importar las rutas de citas
const citaRoutes = require('./routes/citaRoutes');

// Configurar Express para usar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para manejar formularios POST
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal GET /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

console.log('Conectando a la base de datos:', process.env.DATABASE_URL);


// Conectar las rutas de las citas
app.use('/citas', citaRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
