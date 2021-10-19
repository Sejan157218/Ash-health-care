import { useEffect, useState } from "react"

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsloading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setIsloading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setIsloading(true)
        signOut(auth).then(() => {

        }).finally(() => setIsloading(false))
    }

    const handlerEmailSignUp = (name,email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(name);
                const user = userCredential.user;
                user.displayName=name;

            }).catch((error) => {
                setError(error.message);

            })
            ;
    }

    const handlerLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                setError('login is success')
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsloading(false)
        });
        return () => unsubscribed;
    }, [])
    return {
        user,
        isLoading,
        signInWithGoogle,
        error,
        handlerLogin,
        handlerEmailSignUp,
        // handlerToSubmit,
        logOut,
    }
}

export default useFirebase;