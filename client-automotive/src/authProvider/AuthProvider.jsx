import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export  const authContext = createContext(auth);

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true)
 const googleProvider = new GoogleAuthProvider()

// create user or registration


const  signUp = (email,password)=>{

    return createUserWithEmailAndPassword(auth,email,password)
}


// update profile user 


const profieUpdate = (name,photo)=>{

    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo,
      })
}

// get data

const data =()=>{


   return   auth.currentUser;
// return {} if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.
// //   const displayName = user.displayName;
//   const email = user.email;
// //   const photoURL = user.photoURL;
// //   const emailVerified = user.emailVerified;

//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
//   const uid = user.uid;
// }

}


// signIn with user

const login = (email,password)=>{

    return  signInWithEmailAndPassword(auth,email,password)
}


// google login 

const googleLogin = ()=>{

    return signInWithPopup(auth,googleProvider)
}


// Logout User 

const logOut = ()=>{

    return signOut(auth)
}



// state or observer

 const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{

        setUser(currentUser);
        setLoading(false)
         return ()=>unSubscribe()
 })


     const info ={

        signUp,profieUpdate ,
        data ,login,
        user,logOut,
        googleLogin,
        loading
    
    
    
    
    }

console.log(user)
    return (
        <div>
             <authContext.Provider value={info}>
            {children}
             </authContext.Provider>
        </div>
    );
};

export default AuthProvider;



AuthProvider.propTypes = {
    children:PropTypes.object
   }


