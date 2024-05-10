import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,updateProfile,
  sendEmailVerification,
  updatePassword
} from "firebase/auth";
import toast from "react-hot-toast";
import store from "./store";
import {login as loginHandle, logout as logoutHandle} from "./store/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAycuiplOx5iYzL-rEjsc1K-4ud9I5wMWE",
  authDomain: "fir-giris-uygulama.firebaseapp.com",
  projectId: "fir-giris-uygulama",
  storageBucket: "fir-giris-uygulama.appspot.com",
  messagingSenderId: "974926143086",
  appId: "1:974926143086:web:d555911f713e56cc2f107f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();


export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};


export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const logout = async () => {
  try {
     await signOut(auth);
    return true
  } catch (error) {
    toast.error(error.message);
  }
}

export const update= async data => {
try {
  await updateProfile(auth.currentUser, data)
  toast.success('Profil Güncellendi')
  return true
}
catch (error) {
toast.error(error.message)
}
}

export const resetPassword= async password => {
  try {
    await updatePassword(auth.currentUser, password)
    toast.success('Parolanız Güncellendi')
    return true
  }
  catch (error) {
  toast.error(error.message)
  }
  }


export const emailVerification =async () => {
  try {
    await sendEmailVerification(auth.currentUser)
    toast.success(`Doğrulama maili ${auth.currentUser.email} adresine gönderildi kontrol ediniz`)
  }
  catch (error) {
    toast.error(error.message)
  }
}

onAuthStateChanged(auth, (user)=> {
  if (user) {

store.dispatch(loginHandle({
  displayName:user.displayName,
  email:user.email,
  emailVerified:user.emailVerified,
  photoURL:user.photoURL,
  uid:user.uid
}))
    
  }
  else {
    store.dispatch(logoutHandle())
  }
})





export default app;
