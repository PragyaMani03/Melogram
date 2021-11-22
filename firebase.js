var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyAQuUFnNWWMfND2y6UaYolVAY2t7aPkeq4",
  authDomain: "melogram-92ff4.firebaseapp.com",
  projectId: "melogram-92ff4",
  storageBucket: "melogram-92ff4.appspot.com",
  messagingSenderId: "554469691192",
  appId: "1:554469691192:web:76e7ad2729622bf55a7bcd",
  measurementId: "G-NFZQ9HM1VC"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}