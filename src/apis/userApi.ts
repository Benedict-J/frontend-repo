import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Error from "next/error";
import { initializeApp } from "firebase/app";
import store from "@/store/store";

const firebaseConfig = {
  apiKey: "AIzaSyDJ9O2SsOSv9nwKv6kjnz26C3R5nyxiTiA",
  authDomain: "ebuddy-firebase.firebaseapp.com",
  projectId: "ebuddy-firebase",
  storageBucket: "ebuddy-firebase.appspot.com",
  messagingSenderId: "245493260627",
  appId: "1:245493260627:web:0ed2f430f516c4237f41a6",
  measurementId: "G-RZJS855N4P"
};

const app = initializeApp(firebaseConfig);

const updateUserDataAPI = async (data: any) => {
  const token = localStorage.getItem('token') || ''

  store.dispatch({ type: 'loading', payload: true })

  try {
    const response = await fetch('http://localhost:8000/users/update-user-data', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        token: token
      },
      body: JSON.stringify(data)
    })

    const { result, resultMessage } = await response.json()

    if (result !== 0) {
      return store.dispatch({ type: 'alert', payload: { type: 'error', message: resultMessage }})
    } else if (result === -99) {
      return store.dispatch({ type: 'alert', payload: { type: 'error', message: resultMessage } })
    }

    store.dispatch({ type: 'alert', payload: { type: 'success', message: resultMessage }})
  } catch (e: any) {
    store.dispatch({ type: 'alert', payload: { type: 'error', message: e.message }})
  } finally {
    store.dispatch({ type: 'loading', payload: false })
  }
}

const fetchUserDataAPI = async () => {
  const token = localStorage.getItem('token') || ''

  store.dispatch({ type: 'loading', payload: true })

  try {
    const response = await fetch('http://localhost:8000/users/fetch-user-data', {
      headers: {
        token: token
      }
    })  

    const { result, resultMessage, content } = await response.json()

    if (result === 0) {
      return content
    } else if (result === -99) {
      return store.dispatch({ type: 'alert', payload: { type: 'error', message: resultMessage } })
    }
  } catch (e: any) {
    store.dispatch({ type: 'alert', payload: { type: 'error', message: e.message }})
  } finally {
    store.dispatch({ type: 'loading', payload: false })
  }
}

const login = async (email: string, password: string) => {
  const auth = getAuth();

  store.dispatch({ type: 'loading', payload: true })
  
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const userToken = await userCredential.user.getIdToken()  

    localStorage.setItem('token', userToken)
    window.location.href = '/main'
  } catch (e: any) {
    store.dispatch({ type: 'alert', payload: { type: 'error', message: e.message }})
  } finally {
    store.dispatch({ type: 'loading', payload: false })
  }
}

export { fetchUserDataAPI, updateUserDataAPI, login }