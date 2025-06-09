require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

// Importar las rutas de citas
const citaRoutes = require('./routes/citaRoutes');
const authRoutes = require('./routes/authRoutes');


// Middlewares globales
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

function protegerRuta(req, res, next) {
  if (req.cookies.usuario_id) {
    return next();
  }
  return res.redirect('/auth/login');
}
// Middleware para manejar formularios POST
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));


// Rutas

// Ruta principal GET /
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });
app.get('/', (req, res) => {
  res.redirect('/auth/login');
});

// Rutas publicas
app.use('/auth', authRoutes);


console.log('Conectando a la base de datos:', process.env.DB_HOST + '/' + process.env.DB_NAME);

// Rutas protegidas
app.use('/citas', protegerRuta,citaRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
