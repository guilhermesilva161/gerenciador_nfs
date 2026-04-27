import { Router } from "express";
import * as operController from "./controllers/operController"
import * as notasController from "./controllers/notasController"
import * as userController from "./controllers/userControllers"
import * as roleController from "./controllers/roleControtller"
import * as loginController from "./controllers/loginController"
import { verifyAuth } from "./middleware/verifyAuth";
import { verifyRole } from "./middleware/roleAuth";

const router = Router();
  //OPERS
    router.post("/opers", verifyAuth, verifyRole(1),operController.insertOper);
    router.put("/opers/:id",verifyAuth, verifyRole(1),operController.updateOper)
    router.get("/opers",verifyAuth, verifyRole(1), operController.getOper);
    router.get("/opers/:id",verifyAuth, verifyRole(1),operController.getOperById);
    router.delete("/opers/:id",verifyAuth, verifyRole(1), operController.deleteOperById);
    
    //NOTAS
    router.get("/notas",verifyAuth, verifyRole(1,2), notasController.getNotas);
    router.put("/notas/:id",verifyAuth, verifyRole(1), notasController.updateNotaAdm);
    router.put("/notas/:id",verifyAuth, verifyRole(2), notasController.updateNotaOper);
    router.get("/notas/:id",verifyAuth, verifyRole(1,2), notasController.getNotaById);
    router.post("/notas/",verifyAuth, verifyRole(1), notasController.insertNota);
    router.delete("/notas/:id",verifyAuth, verifyRole(1), notasController.deleteNotaById);

    //USERS
    router.post("/users",verifyAuth, verifyRole(1), userController.insertUser);
    router.get("/users",verifyAuth, verifyRole(1), userController.getUser);
    router.put("/users/:id", verifyAuth, verifyRole(1),userController.updateUser);
    router.delete("/users/:id",verifyAuth, verifyRole(1), userController.deleteeUser);

    //LOGIN
    router.post("/login", loginController.login)
    router.get("/login/:id", loginController.getUser);

    //ROLES
    router.get("/roles" ,verifyAuth, verifyRole(1), roleController.getRole);
    router.post("/roles", verifyAuth, verifyRole(1), roleController.insertRole)


export default router;
