import {Request, Response} from "express";

export function controller(json: any) {
  console.log("JSON is", json);

  return "Hello, World";
}
