import express, { Router } from "express";


import UserController from "../controllers/UserController";
import { cacheCheck } from "../middlewares/CacheCheck";


const router: Router = express.Router();


router.get("/:username", cacheCheck, UserController.getUserInfo);


export {
  router as UserRouter,
};