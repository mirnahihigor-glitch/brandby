const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Важно для запросов с фронтенда
app.use(express.json());

// Тестовый эндпоинт
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Backend is running!' });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});