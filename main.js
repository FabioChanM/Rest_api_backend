const express = require('express');
const axios = require('axios');

const app = express();
const apiKey = 'hIgOxTdW8ADz7xncJ1SzcDpRhF1QwgbLTxc8g2G2'; // Reemplaza esto con tu API key de la NASA

app.use(express.static('public')); // Configura Express para servir archivos estáticos desde la carpeta 'public'

app.get('/apod', (req, res) => {
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  axios.get(apiUrl)
    .then(response => {
      const data = response.data;
      res.json(data);
    })
    .catch(error => {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Error obteniendo los datos de la API.' });
    });
});

