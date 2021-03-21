import express, { Router } from "express";
import UserController from "../controllers/UserController";


const router: Router = express.Router();


router.get("/:username", UserController.getUserInfo);


export {
  router as UserRouter,
};