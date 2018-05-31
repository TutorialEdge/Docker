import * as express from "express";

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get('/', (request: any, response: any) => 
  response.send("hello World, how's it going")
)

// export our app
export default app;