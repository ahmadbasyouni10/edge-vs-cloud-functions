const functions = require("firebase-functions");

exports.basic = functions.https.onRequest(async (req, res) => {
    res.json({text: "Salah is the best player in the world"})
});