import express from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routers/index.js";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

const server = express();
server.use(cors());
server.use(express.json());
server.use(router);
server.use(errorHandlerMiddleware);

server.listen(4000, () => {
    console.log("Listening on http://localhost:4000");
});
