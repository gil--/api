// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
db.settings(settings);

/*
    Helper function to add a new donation to the database

    Send the following parameters in the body POST:
    {
        NUMBER amount,
        STRING currency,
        STRING merchantName,
        ID fundId,
    }
*/
exports.addDonation = functions.https.onRequest((request, response) => {
    // Get body values
    const { amount, currency, merchant_name, fundId } = request.body;

    // Save new donation
    db.collection('donations')
        .add({
            donation_amount: amount || 0,
            donation_currency: currency || 'USD',
            donation_merchant_name: merchant_name || '',
            fundId: fundId | '',
        })
        .then(res => {
            console.log(res);
            // console.log document id ?
            console.log('Document successfully written!');
            response.send('Created a new donation');
            return true;
        })
        .catch(error => {
            console.error('Error writing document: ', error);
            response.send('Error writing document: ', error);
        });
});

/*
    Helper Function to Add New Donation Amount to Fund Balance
*/