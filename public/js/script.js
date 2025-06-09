async function reservarCita() {
    const respuesta = await fetch('/citas/reservar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_terapista: 1,
        id_paciente: 5,
        fecha_sesion: '2025-06-04',
        hora_inicio: '10:00',
        hora_fin: '11:00',
        requiere_maquina: true
      })
    });
  
    const datos = await respuesta.json();
    console.log(datos);
  }
  