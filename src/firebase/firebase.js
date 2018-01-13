import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

//--------------------------------------------------------------------

// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value',(snapshot)=>{
//    const expenses = [];
//    snapshot.forEach((childSnapshot)=>{
//       expenses.push({
//         id : childSnapshot.key,
//           ...childSnapshot.val()
//       });
//    });
//    console.log(expenses);
// });

// database.ref('expenses').once('value').then((snapshot)=>{
//    const expenses = [];
//    snapshot.forEach((childSnapshot)=>{
//       expenses.push({
//         id : childSnapshot.key,
//           ...childSnapshot.val()
//       });
//    });
//    console.log(expenses);
// });

// const expenses = {
//         desctipiton : 'Expense-3',
//         amount : '103',
//         createdAt : -1000,
//         note : 'third expense'
//     };

// database.ref('expenses').push(expenses);

// const onChangeValue = database.ref().on('value',(Snapshot)=>{
//    const Data = Snapshot.val();
//     console.log(`${Data.name} is ${Data.age} years old and current lives in ${Data.location.city}`);
// },(e)=>{
//     console.log('Unable to fetch data');
// });


// database.ref().on('value',(snapshot)=>{
//    console.log(snapshot.val());
// });

// database.ref().once('value').then((snapshot)=>{
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e)=>{
//    console.log('Cannot fetch -> ',e);
// });

// database.ref().set({
//    name : 'Jatin Kumar',
//     age : 19,
//     isSingle : true,
//     location : {
//        city : 'New Delhi',
//         country : 'INDIA'
//     }
// });
//
// database.ref('attributes').set({
//     height : 182,
//     weight : 60
// }).then(()=>{
//     console.log('Data is saved');
// }).catch((e)=>{
//     console.log('This is failed',e);
// });

// database.ref('isSingle').remove().then(()=>{
//     console.log('isSingle removed successfully');
// }).catch((e)=>{
//     console.log('error found ------>',e);
// });

// database.ref().update({
//     isSingle : null,
//     age : 18,
//     'location/city' : 'Banglore'
// }).then(()=>{
//     console.log('data updated');
// }).catch((e)=>{
//     console.log('data not updated -> ',e);
// });
