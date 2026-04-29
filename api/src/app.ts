import express from "express";
import router from "./routes";
import cors from "cors"

function createApp () {
    const app = express();
    console.log("funcionando")
    app.use(cors({origin: "http://localhost:5173",
                  credentials: true}))
    app.use(express.json());
    app.use("/api", router)
    return app;
}
export default createApp;