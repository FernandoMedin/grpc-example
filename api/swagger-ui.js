const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const VERSIONS = require('./versions.json');
var helpers = require('./swagger-helper');

const PORT = 3300;

// Return setup for Swagger Ui
const useSchema = schema => (...args) => swaggerUi.setup(schema)(...args);

VERSIONS.forEach((version) => {
  console.info('Configuring version:', version);
  const swaggerSpec = helpers.getSwaggerSpec(version);
  app.use('/' + version, swaggerUi.serve, useSchema(swaggerSpec));
  app.get('/' + version + '.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
});

app.listen(PORT, () => {
  console.log("Server started at:", PORT);
});
