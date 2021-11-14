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
    const [admin, setAdmin] = useState(false);




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

    const handleNameChange = e => {
        setName(e.target.value);
    }


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


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');

                saveUser(email,name);

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



    useEffect(() => {
        fetch(`https://sheltered-sea-70251.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

const saveUser =(email,displayName)=>{
    const user = {email,displayName}
    fetch('https://sheltered-sea-70251.herokuapp.com/users',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
        
    })
    .then()
}



    return {
        user,
        admin,
        error,
        logOut,
        isLoading,
        handleLogIn,
        handlRegister,
        setName,
        handlePasswordChange,
        handleEmailChange,
        signInUsingGoogle,
        handleNameChange
    }
}

export default useFirebase;