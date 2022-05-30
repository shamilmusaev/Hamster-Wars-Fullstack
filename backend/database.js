const admin = require("firebase-admin");

let serviceAccount;
if (process.env.PRIVATE_KEY) {
  serviceAccount = JSON.parse(process.env.PRIVATE_KEY)
}
else {
  serviceAccount = require("./hamsterwars-c14e5-firebase-adminsdk-pzr48-b275c2e3cd.json");
}




admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });


function getDatabase() {

return admin.firestore();

}



module.exports = getDatabase;