import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    // create new user
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    // login with google
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // log out user
    const logOutUser = () => {
        return signOut(auth);
    }

    // observe user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                setUser(currentUser)
            }
        })

        return () => {
            unSubscribe();
        }
    }, [])

    console.log(user);

    const authInfo = {
        createNewUser,
        loginUser,
        user,
        setUser,
        logOutUser,
        loginWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <Toaster/>
        </AuthContext.Provider>
    );
};

export default AuthProvider;