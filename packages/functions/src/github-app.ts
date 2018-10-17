const GithubApp = require("github-app");
const path = require("path");

export const githubApp = GithubApp({
  id: 19318,
  cert: require("fs").readFileSync(path.resolve(__dirname, "../private-key.pem")),
});
