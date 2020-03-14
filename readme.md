# Import Export Firebase

**Important : this has been design to be used for Devfest Strasbourg 2020. A bit more customization might be needed to work properly with other projects**

## Get started
1. First, clone this repo
`git clone https://github.com/Lolincolc/import-export-firebase.git`

2. Then, go to the cloned folder and install node module using npm :
`npm install firestore-export-import`

3. Download firebase key :
> Project Settings > Service Account > Generate new private key

* Put the file in the folder
* Open index.js and change line 2 with path to this key
* Same for export.js

## Usage
To **import** localy the Firestore DB :
1.  On line 10 of index.js replace "team" by the collection you want to import
2. `node index.js`

This will create a file in the folder named `firestore-export.json`


To **export** the previous file to firestore :
`node export.js`
