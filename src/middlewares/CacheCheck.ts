import { Request, Response, NextFunction } from "express";


import { cache } from "../app";


const cacheCheck = (req: Request, res: Response, next: NextFunction) => {
  const username = req.params.username;

  const cacheValue = cache.get(username);

  if (cacheValue !== undefined) {
    return res.json(JSON.parse(cacheValue));
  } else {
    next();
  }
}


export {
  cacheCheck,
};