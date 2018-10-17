// Express application to handle Github webhooks.

import {Push, PullRequest} from "github-webhook-event-types";
import {githubApp} from "./github-app";

// import "@octokit/rest";
import * as Github from "@octokit/rest";

const createHandler = require("express-github-webhook");
const secret = "abc";

export const handler = createHandler({path: "/", secret});

handler.on("error", function(err) {
  console.error("Error:", err.message);
});

handler.on("push", async function(repo: string, event: Push) {
  // for some reason, installation is not in the `github-webhook-event-types definitions.
  const {installation} = event as any;

  console.log("installation id is", installation.id);

  const github: Github = await githubApp.asInstallation(installation.id);

  const {
    ref,
    repository: {
      owner: {name: owner},
    },
  } = event;

  const readme = await github.repos.getReadme({owner, repo, ref});

  console.log("readme content is", Buffer.from(readme.data.content, "base64").toString());

  //   "Received a push event for %s to %s",
  //   event.payload.repository.name,
  //   event.payload.ref
  // );
});

handler.on("ping", function(event) {
  console.log("Received ping", event);
});

handler.on("pull_request", (repo: string, event: PullRequest) => {});
