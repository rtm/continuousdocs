const GithubApp = require("github-app");

export const githubApp = GithubApp({
  id: 19318,
  cert: require("fs").readFileSync("private-key.pem"),
});
