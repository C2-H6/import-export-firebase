const firestoreService = require('firestore-export-import');
const serviceAccount = require('./devfest-strasbourg-2020-firebase-adminsdk-urytc-8f80cde7ad.json');

// Initiate Firebase App
firestoreService.initializeApp(serviceAccount, "https://devfest-strasbourg-2020.firebaseio.com");

// Start importing your data
// The array of date and location fields are optional
firestoreService.restore('firestore-export.json');