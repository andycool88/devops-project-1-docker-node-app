const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Basic route
app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Emaye Andrew Dockerized Dockerized Node.js app!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'Docker Node App' });
});

// About endpoint
app.get('/about', (req, res) => {
  res.json({
    name: 'Dockerized Node App',
    version: '1.0.0',
    description: 'My name is Andrew Emaye, I am a Devops engineer and this is a simple Node.js app running in Docker'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to see your app`);
});