import Firebase from 'firebase';
let config = {
	apiKey: "AIzaSyAdGYwRo8cedBYeJYgjBi23FB9J2NTPJAA",
    authDomain: "badminton-chennai-one.firebaseapp.com",
    databaseURL: "https://badminton-chennai-one.firebaseio.com",
    projectId: "badminton-chennai-one",
    storageBucket: "badminton-chennai-one.appspot.com",
    messagingSenderId: "678011601666",
    appId: "1:678011601666:web:a80d5d5ab89d33db1df81b",
    measurementId: "G-VH1QG79FRT"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
