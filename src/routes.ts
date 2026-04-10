import { Router } from "express";
import * as operController from "./controllers/operController"

const router = Router();
    router.post("/opers",operController.insertOper);
    router.put("/opers/:id",operController.updateOper)
    router.get("/opers",operController.getOper);
    router.get("/opers/:id",operController.getOperById);
    router.delete("/opers/:id", operController.deleteOperById);


export default router;
