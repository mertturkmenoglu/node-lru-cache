import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";


import { morganFormat } from "./config/MorganConfig";
import { UserRouter } from "./routes/UserRouter";


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(morgan(morganFormat));
app.use(cors());
app.use(helmet());


app.use("/api/v1", UserRouter);


app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});