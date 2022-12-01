const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.route']

swaggerAutogen(outputFile, endpointsFiles)