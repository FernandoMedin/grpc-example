const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const VERSIONS = require('./versions.json');
var helpers = require('./swagger-helper');

const PORT = 3300;

// Return setup for Swagger Ui
const getSwaggerUiSetup = (version) => {
  const swaggerSpec = helpers.getSwaggerSpec(version);
  return swaggerUi.setup(swaggerSpec);
}

VERSIONS.forEach((version) => {
  const setup = getSwaggerUiSetup(version);
  const swaggerSpec = helpers.getSwaggerSpec(version);
  app.use('/' + version, swaggerUi.serve, setup);
  app.get('/' + version + '.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
});

app.listen(PORT, () => {
  console.log("Server started at:", PORT);
});
