"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);
// API Endpoints
app.get('/', (request, response) => response.send("hello World, how's it going"));
// export our app
exports.default = app;
//# sourceMappingURL=app.js.map