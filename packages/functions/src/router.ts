import {Router} from "express";
import {controller} from "./controller";

export const router = Router();

router.post("/", (req, res) => {
  const json: object = req.body;

  console.log("req is", req);
  res.send(controller(json));
});
