const firebaseConfig = {
  apiKey: "AIzaSyD8pWvtE9oV5yf8l2cygkZGxYGVEl18mFA",
  authDomain: "sakamina-5374.firebaseapp.com",
  projectId: "sakamina-5374",
  storageBucket: "sakamina-5374.appspot.com",
  messagingSenderId: "209418200635",
  appId: "1:209418200635:web:d1b8e9778441421fcfde1e",
  measurementId: "G-5ZHQQJ0LH3"
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

messaging.usePublicVapidKey('BJiMnbjaA-tnFSA4NglJ82POn5w_6sds7bg1Q1ZDOXm9qqzauZZcU14cHDPYunrUcX3a2aI1F_OFyK8XYFMer0M');
messaging.onMessage( payload => {
  console.log('onMessage:',payload);
});
