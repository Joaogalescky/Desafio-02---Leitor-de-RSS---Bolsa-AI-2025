const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./src/routes/routes.js');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/docs/swagger.js');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

// Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Redoc
app.get('/redoc', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Redoc</title>
        <meta charset="utf-8"/>
        <style>
          body { margin: 0; padding: 0; }
        </style>
      </head>
      <body>
        <div id="redoc-container"></div>
        <script src="https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js"></script>
        <script>
          Redoc.init('/swagger.json', {}, document.getElementById('redoc-container'))
        </script>
      </body>
    </html>
  `);
});

// JSON bruto do Swagger
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});