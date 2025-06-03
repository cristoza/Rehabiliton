
const path = require('path');

const port = 3000;


const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); // Para leer formularios POST
app.use(express.json()); // Si quieres leer JSON también

// Rutas admin
const adminRoutes = require('./admin/routes/adminRoutes');
app.use('/admin', adminRoutes);
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
  res.redirect('/citas/reservar');
});

console.log('Conectando a la base de datos:', process.env.DATABASE_URL);


// Conectar las rutas de las citas
app.use('/citas', citaRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

