import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        version: "v0.0.1",
        title: "Dokumentasi BE MERN Tutorial",
        description: "Dokumentasi BE MERN Tutorial"
    },
    servers: [
        {
            url: "http://localhost:3000/api",
            description: "Local Server",
        },
        {
            url: "https://be-mern-tutorial.vercel.app/api",
            description: "Deploy Server",
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            }
        },
        schemas: {
            LoginRequest: {
                identifier: "fahmi2130",
                password: "fahmi12345",
            }
        }
    }
}
const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"]

swaggerAutogen({openapi: "3.0.0"})(outputFile, endpointsFiles, doc);