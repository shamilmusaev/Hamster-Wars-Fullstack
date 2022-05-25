const admin = require("firebase-admin");



const serviceAccount = require("./hamsterwars-c14e5-firebase-adminsdk-pzr48-b275c2e3cd.json");



admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });


function getDatabase() {

return admin.firestore();

}



module.exports = getDatabase;