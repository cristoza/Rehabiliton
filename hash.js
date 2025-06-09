const bcrypt = require('bcrypt');
const contraseña = '12'; // tu contraseña real
bcrypt.hash(contraseña, 10).then(hash => {
  console.log('Hash:', hash);
});