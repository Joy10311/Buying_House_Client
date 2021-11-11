import { useEffect, useState } from "react";
 import initializeAuthentication from "../../Firebase/firebase.init.js"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";



initializeAuthentication();
const useFirebase = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);




    const auth = getAuth();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    // const handleNameChange = e => {
    //     setName(e.target.valo);
    // }


    const handleEmailChange = e => {
        setEmail(e.target.value);
    }


    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }


    const handlRegister = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password should be 6 charecter')
            return;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,}$/.test(password)) {
            setError('password should be 6 charecter includes uppercase,lowercae,special sign and number')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
                verifyMail();
                setUserName();

            })
            .catch(error => {
                setError(error.message)
            })

    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => { })
    }


    const verifyMail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            })
    }

    const handleLogIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })


    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribe;
    }, [])





    return {
        user,
        error,
        logOut,
        isLoading,
        handleLogIn,
        handlRegister,
        setName,
        handlePasswordChange,
        handleEmailChange,
        signInUsingGoogle
    }
}

export default useFirebase;