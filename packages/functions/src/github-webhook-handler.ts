// Express application to handle Github webhooks.

import {Push} from "github-webhook-event-types";
import {githubApp} from "./github-app";

const createHandler = require("express-github-webhook");
const secret = "abc";

export const handler = createHandler({path: "/", secret});

handler.on("error", function(err) {
  console.error("Error:", err.message);
});

handler.on("push", async function(event: Push) {
  console.log(event);

  const github = await githubApp.asInsstallation(event.payload.installation.id);

  //   "Received a push event for %s to %s",
  //   event.payload.repository.name,
  //   event.payload.ref
  // );
});

handler.on("*", function(event) {
  console.log(event);
  //   "Received any event event for %s to %s",
  //   event.payload.repository.name,
  //   event.payload.ref
  // );
});

handler.on("ping", function(event) {
  console.log("Received ping", event);
});
