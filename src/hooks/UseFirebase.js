import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../pages/login/firebase/Firebase.Init";

initializeAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const auth = getAuth();
  const GoogleProvider = new GoogleAuthProvider();

  const signInUseingGoogle = () => {
    setIsLoading(true)
    return signInWithPopup(auth, GoogleProvider)
     
      .catch((error) => {
        // Handle Errors here
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({})
      }
      setIsLoading(false);
    })
    return () => unsubscribed;
  }, []);


  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      setUser({})
    })
    .finally(() => setIsLoading(false));
  }


  return {
    user, signInUseingGoogle, logOut, isLoading, error
  }

}

export default useFirebase;