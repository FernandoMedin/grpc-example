/**
 * Intercept the request and compare validation from swagger
 */
import { OpenApiValidator } from 'express-openapi-validate';
import { getSwaggerSpec } from '../../swagger-helper';

let openApiDocument = getSwaggerSpec('v1');
const validator = new OpenApiValidator(openApiDocument);

const baseUrl = '/v1';

// Get '/:attribute' and returns '{attribute}'
var replacePath = (attribute) => {
  const cleared = attribute.replace(':', '').replace('/', '');
  return '{' + cleared + '}';
}

// Get '/:id/abc/:test' and returns '/{id}/abc/{test}'
var parsePath = (path) => {
  var regexp = /(\/\:.*)/gi;
  let group = path.match(regexp);

  if(group) {
    return group.map(replacePath).join('/');
  } else {
    return null;
  }
}

var middleware = (req, res, next) => {
  const method = req.method.toLowerCase();
  const entity = req.baseUrl.replace(baseUrl, '');

  const path = parsePath(req.route.path);
  const fullPath = [entity, path].filter(Boolean).join('/');
  validator.validate(method, fullPath)(req, res, next);
};

export default middleware;
