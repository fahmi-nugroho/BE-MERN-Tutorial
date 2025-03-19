import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v0.0.1",
    title: "Dokumentasi BE MERN Tutorial",
    description: "Dokumentasi BE MERN Tutorial",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local Server",
    },
    {
      url: "https://be-mern-tutorial.vercel.app/api",
      description: "Deploy Server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      LoginRequest: {
        identifier: "budisetiawan",
        password: "Budi12345",
      },
      RegisterRequest: {
        fullName: "joni joni",
        username: "joni2024",
        email: "joni2024@yopmail.com",
        password: "123123123",
        confirmPassword: "123123123",
      },
      ActivationRequest: {
        code: "abcdefg",
      },
      CreateCategoryRequest: {
        name: "category 1 - name",
        description: "category 1 - description",
        icon: "category 1 - icon",
      },
      CreateEventRequest: {
        name: "Acara - 2 - name",
        banner:
          "https://res.cloudinary.com/dyv9qsscu/image/upload/v1741939308/hb8lfnhvmbkuyngjv8ef.png",
        category: "67da47ac10e46db1a2626a88",
        description: "Acara - Description",
        startDate: "2024-12-16 10:45:00",
        endDate: "2024-12-16 13:45:00",
        location: {
          region: 3578080004,
          coordinates: [6.6, 10.1],
        },
        isOnline: false,
        isFeatured: true,
      },
      RemoveMediaRequest: {
        fileUrl:
          "https://res.cloudinary.com/dyv9qsscu/image/upload/v1741939308/kyj7fo3zhltpyixsqdom.png",
      },
    },
  },
};
const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
