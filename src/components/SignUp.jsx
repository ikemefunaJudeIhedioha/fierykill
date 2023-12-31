import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../config/firebase';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [fac, setFac] = useState('')

    const handleFac = (e) => {
        setFac(e.target.value)
    }


    const handlePassword = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }


    const handleEmail = (e) => {
        setEmail(e.target.value)
        console.log(email);
    }

    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const createUser = (e) => {
        e.preventDefault(),
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log('signed up')
                    // ...
                    navigate('/profile')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
    }

    const handleGoogleSignUp = (e) => {
        e.preventDefault()
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                navigate('/profile')
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div className='h-full w-full bg-orange-400 text-white p-8'>
            <h1 className='text-4xl font-bold md:text-4xl lg:text-7xl text-center mt-4 mb-32'>Burham University</h1>

            <form className='w-full mx-auto md:px-8 px-4 md:py-10 py-4 flex flex-col items-center gap-8 border rounded-xl md:rounded-2xl md:w-[30%]' onSubmit={(e) => { createUser(e) }}>

                <h1 className='text-2xl font-bold md:text-4xl'>Register</h1>

                <div className='w-full flex gap-2 text-lg flex-col'>
                    <p className='font-semibold'>Email Address</p>
                    <input className='bg-transparent border-b text-white mb-3 outline-none' type="email" onChange={handleEmail} />
                </div>

                <div className='w-full flex gap-2 text-lg flex-col'>
                    <p className='font-semibold'>Password</p>
                    <input className='bg-transparent border-b text-white mb-3 outline-none' type="password" onChange={handlePassword} />
                </div>

                <div className='w-full flex gap-2 text-sm flex-col'>
                    <p className='font-bold'>There are 3 major facaulties in this institution.</p>
                    <span className='font-bold'> Those 3 are Science, Art and business. </span>
                    <span className='font-bold'>In the box below write down the facaulty you fall into</span>
                    <input className='bg-transparent border-b text-white mb-3 outline-none mt-4' type="text" onChange={handleFac} />
                </div>

                <button className='bg-white py-3 px-4 rounded-xl md:rounded-2xl border text-orange-400 font-semibold text-lg hover:bg-transparent hover:text-white hover:rounded-none transition-all linear duration-200'>Sign Up</button>

                <div className='flex flex-col gap-3 items-center'>
                    <p className='text-lg font-semibold -mt-3 mb-2 uppercase'>
                        Or
                    </p>

                    <button className='bg-white py-3 px-4 rounded-xl md:rounded-2xl border text-orange-400 font-semibold text-lg hover:bg-transparent hover:text-white hover:rounded-none transition-all linear duration-200 ml-3 mb-2' onClick={(e) => { handleGoogleSignUp(e) }}>Use Google</button>

                    <p className='text-lg font-semibold'>Already own a portal? <Link to='/login' className='font-bold underline'>Log In</Link></p>
                </div>

            </form >
        </div >
    )
}

export default SignUp