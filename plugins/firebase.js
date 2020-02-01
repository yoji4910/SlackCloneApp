import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyBMkyY_bdo43H0gnk30LC2dFrfwE-DUQqc",
    authDomain: "slack-clone-app-ae3ce.firebaseapp.com",
    databaseURL: "https://slack-clone-app-ae3ce.firebaseio.com",
    projectId: "slack-clone-app-ae3ce",
    storageBucket: "slack-clone-app-ae3ce.appspot.com",
    messagingSenderId: "844662989844",
    appId: "1:844662989844:web:c77bb3c3e2c4eff638f301",
    measurementId: "G-M15HCBJCWF"
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore()

export {
  firebase,
  db
}