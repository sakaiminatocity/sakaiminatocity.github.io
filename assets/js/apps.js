const firebaseConfig = {
  apiKey: "AIzaSyD2I5PORGOzk6X1MCgYRBbj2nN2U63e76w",
  authDomain: "test-4aae7.firebaseapp.com",
  projectId: "test-4aae7",
  storageBucket: "test-4aae7.appspot.com",
  messagingSenderId: "186971164937",
  appId: "1:186971164937:web:cd1b7153ae0b9378ee83d8",
  measurementId: "G-YQWPR4LFXX"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.requestPermission()
.then( () => {
  console.log('Have permission');
  return messaging.getToken();
})
.then( token => {
  console.log(token);
})
.catch( err => {
  console.log('error Occuerd at getpermission');
   return messaging.getToken();
})
.then( token => {
  console.log(token);
});

messaging.usePublicVapidKey('BGUPPKNNy5HCBT1irshBLKp08IMhEhObLvJQjyO8iu8oP7WT2A41WkrV-CsccsMkm-o8fsuIUIEHJSYrcLGdrf4');
messaging.onMessage( payload => {
  console.log('onMessage:',payload);
});