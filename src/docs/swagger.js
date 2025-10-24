const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Extração de RSS',
            version: '1.0.0',
            description: 'API para buscar notícias via RSS do G1 Brasil',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['src/routes/routes.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;