import { Router } from "express";
import * as operController from "./controllers/operController"
import * as notasController from "./controllers/notasController"
import * as userController from "./controllers/userControllers"
import * as roleController from "./controllers/roleControtller"
import * as loginController from "./controllers/loginController"

const router = Router();
    router.post("/opers",operController.insertOper);
    router.put("/opers/:id",operController.updateOper)
    router.get("/opers",operController.getOper);
    router.get("/opers/:id",operController.getOperById);
    router.delete("/opers/:id", operController.deleteOperById);

    router.get("/notas", notasController.getNotas);
    router.put("/notas/:id", notasController.updateNotaAdm);
  //router.put("/notas/:id", notasController.updateNotaOper);
    router.get("/notas/:id", notasController.getNotaById);
    router.post("/notas/", notasController.insertNota);
    router.delete("/notas/:id", notasController.deleteNotaById);

    router.post("/users", userController.insertUser);
    router.get("/users", userController.getUser);
    router.put("/users/:id", userController.updateUser);
    router.delete("/users/:id", userController.deleteeUser);

    router.post("/login", loginController.login)
    router.get("/login/:id", loginController.getUser);

    router.get("/roles", roleController.getRole);
    router.post("/roles", roleController.insertRole)


export default router;
