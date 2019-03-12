const swaggerJSDoc = require('swagger-jsdoc');
const YAML = require('yamljs');

// Options for Swagger JSDoc
exports.getOptions = (version) => {
  const definition = YAML.load('./' + version + '/definition.yaml');
  return {
    definition: definition,
    apis: ['./' + version + '/swagger/**/*.yaml']
  };
}

// Return Swagger JSDoc
exports.getSwaggerSpec = (version) => {
  const options = exports.getOptions(version);
  return swaggerJSDoc(options);
}
