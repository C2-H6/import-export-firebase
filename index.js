const firestoreService = require('firestore-export-import');
const serviceAccount = require('./devfest-strasbourg-2020-firebase-adminsdk-urytc-8f80cde7ad.json');
const fs = require('fs');

// Initiate Firebase App
firestoreService.initializeApp(serviceAccount, "https://devfest-strasbourg-2020.firebaseio.com");

// Start exporting your data
firestoreService
  .backup('team')
  .then(data => fs.writeFile("firestore-export.json", JSON.stringify(data), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }));