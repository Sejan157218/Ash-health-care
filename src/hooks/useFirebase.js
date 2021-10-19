import { useEffect, useState } from "react"

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [islogin, setLogin] = useState(false)
    const [isLoading, setIsloading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setIsloading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
            .finally(() => setIsloading(false));
    }

    const logOut = () => {
        setIsloading(true)
        signOut(auth).then(() => {

        }).finally(() => setIsloading(false))
    }
    const handlerToSubmit = (name, email, password) => {
        islogin ?
            handlerLogin(email, password, name)
            :
            handlerEmailSignUp(email, password)
    }

    const handlerEmailSignUp = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {

                user.updateProfile({
                    displayName: name,
                })

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
        user,
        error,
        islogin,
        setLogin,
        handlerToSubmit,
        logOut,
    }
}

export default useFirebase;