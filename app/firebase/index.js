import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'
console.log('firebase: ', firebase);
import chalk from 'chalk'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBWPSHXhXpV7_Rg99GsIvCwjzCFo_Xkizg',
  authDomain: 'always-be-bulking.firebaseapp.com',
  databaseURL: 'https://always-be-bulking.firebaseio.com',
  storageBucket: 'always-be-bulking.appspot.com',
}
const app = firebase.initializeApp(config);

const myUserID = 'zl2jhz5tUjSGWbDYmscYE7f6tJl2'
const currentUserID = myUserID
export const firebaseApp = app
window.firebaseApp = firebaseApp


export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    let currentUser = firebase.auth().currentUser
    if (currentUser) {
      resolve(currentUser)
      return
    }

    firebase
      .auth()
      .signInWithEmailAndPassword('yujason2@gmail.com', 'asdfasdf')
      .then(() => {
        currentUser = firebase.auth().currentUser
        console.log('firebase.auth().currentUser: ', currentUser.email)
        console.log('currentUser: ', currentUser.uid);
        resolve(currentUser)
      })
      .catch((err) => {
        console.log('err: ', err)
        reject(err)
      })
  })
}
export const currentUserWorkoutsRef = firebase.database().ref(`/users/${currentUserID}/workouts`)

export const addLift = (liftObj = { name }) => {
  return firebase.database().ref(`/users/${currentUserID}/lifts`).push(liftObj)
}

export default firebase
