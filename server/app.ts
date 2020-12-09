import express from "express";
import {getVersionApi} from "./controllers/api";

const app: express.Application = express();

app.set("port", process.env.PORT || 3000);

app.get('/api/version', getVersionApi);

export default app;
