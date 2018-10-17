import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import {handler} from "./github-webhook-handler";

admin.initializeApp();

// serviceAccount = require('./serviceAccount.json');
//
// const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG);
// adminConfig.credential = admin.credential.cert(serviceAccount);
// admin.initializeApp(adminConfig);

export const buildDocs = functions.https.onRequest((req, res) => {
  handler(req, res, err => {
    res.statusCode = 404;
    console.log({err});
    res.end("no such location");
  });
});
