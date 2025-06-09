const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login', { error: null });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await db.query(
      'SELECT * FROM usuarios WHERE username = $1 AND estado = TRUE',
      [username]
    );

    if (result.rows.length === 0) {
      return res.render('login', { error: 'Usuario no encontrado' });
    }

    const user = result.rows[0];
    const isValid = await bcrypt.compare(password, user.password_hash);

    if (!isValid) {
      return res.render('login', { error: 'Contraseña incorrecta' });
    }

    // Guardar la cookie
    res.cookie('usuario_id', user.id_usuario, { httpOnly: true });
    res.redirect('/citas');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error del servidor');
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('usuario_id');
  res.redirect('/login');
});

module.exports = router;
