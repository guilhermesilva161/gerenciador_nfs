import { Router } from "express";
import * as operController from "./controllers/operController"
import * as notasController from "./controllers/notasController"

const router = Router();
    router.post("/opers",operController.insertOper);
    router.put("/opers/:id",operController.updateOper)
    router.get("/opers",operController.getOper);
    router.get("/opers/:id",operController.getOperById);
    router.delete("/opers/:id", operController.deleteOperById);

    router.get("/notas", notasController.getNotas);
    router.put("/notas/:id", notasController.updateNota);
    router.get("/notas/:id", notasController.getNotaById);
    router.post("/notas/", notasController.insertNota);
    router.delete("/notas/:id", notasController.deleteNotaById);


export default router;
