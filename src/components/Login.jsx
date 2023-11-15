import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../config/firebase';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [fac, setFac] = useState('')

    const handlePassword = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }


    const handleEmail = (e) => {
        setEmail(e.target.value)
        console.log(email);
    }

    const navigate = useNavigate()

    const provider = new GoogleAuthProvider()


    const handleLogin = async (e) => {
        e.preventDefault()
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log('signed in');
                navigate('/profile')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    const handleGoogleSignUp = async (e) => {
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
        <div className='h-screen w-full bg-orange-400 items-center md:gap-6 flex flex-col justify-center gap-20 text-white px-8'>
            <h1 className='text-4xl font-bold md:text-4xl lg:text-7xl text-center -mt-40 mb-40'>Burham University</h1>

            <form className='w-full md:px-8 px-4 md:py-10 py-4 flex flex-col items-center gap-8 border rounded-xl md:rounded-2xl md:w-[30%]' onSubmit={(e) => { handleLogin(e) }}>

                <h1 className='text-2xl font-bold md:text-4xl'>Login</h1>

                <div className='w-full flex gap-2 text-lg flex-col'>
                    <p className='font-semibold'>Email Address</p>
                    <input name='email' className='bg-transparent border-b text-white mb-3 outline-none' type="email" onChange={handleEmail} />
                </div>

                <div className='w-full flex gap-2 text-lg flex-col'>
                    <p className='font-semibold'>Password</p>
                    <input name='password' className='bg-transparent border-b text-white mb-3 outline-none' type="password" onChange={handlePassword} />
                </div>

                <button className='bg-white py-3 px-4 rounded-xl md:rounded-2xl border text-orange-400 font-semibold text-lg hover:bg-transparent hover:text-white hover:rounded-none transition-all linear duration-200'>Log in</button>

                <div className='flex flex-col gap-3 items-center'>
                    <p className='text-lg font-semibold -mt-3 mb-2'>

                        Or
                    </p>

                    <button className='bg-white py-3 px-4 rounded-xl md:rounded-2xl border text-orange-400 font-semibold text-lg hover:bg-transparent hover:text-white hover:rounded-none transition-all linear duration-200 ml-3 mb-2' onClick={(e) => { handleGoogleSignUp(e) }}>Continue with Google</button>

                    <p className='text-lg font-semibold'>Don't own a Portal? <Link to='/signup' className='font-bold underline'>Sign Up</Link></p>
                </div>

            </form>
        </div>
    )
}

export default Login