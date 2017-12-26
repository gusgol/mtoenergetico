import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyBx_S6PvtWZmpz5a7mCc48xd0qLEe06nwY",
    databaseURL: "https://mtoenergetico.firebaseio.com"
};
var fire = firebase.initializeApp(config);
export default fire;