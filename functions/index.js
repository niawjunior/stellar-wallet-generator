const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require("body-parser");
var Keypair = require("stellar-base").Keypair;
const app = express();
const cors = require('cors');

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

createAccount=()=> {
    var newAccount = Keypair.random();    
    var account = {
        publicKey: newAccount.publicKey(),
        secret: newAccount.secret()
    }
    return account
}
app.get('/wallet', (req, res) => {
    res.status(200).send(createAccount())
})
// app.listen(3000, () => {
//     console.log('Server Listening on http://localhost:3000/wallet');
// });
exports.api = functions.https.onRequest(app);