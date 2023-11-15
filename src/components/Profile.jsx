import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

export default function Profile({ fac, email }) {

    const navigate = useNavigate()

    const handleSignout = async () => {
        await signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/')
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div>

            <div className='w-full text-white h-screen py-6 px-6 bg-orange-400'>
                <h1 className='text-3xl md:text-5xl text-center mb-16 '>Burham University welcomes you</h1>
                <p className='text-xl md:text-3xl mb-8 '>Your email address is: {email}</p>
                <p className='text-lg md:text-xl mb-8 text-center'>Please Note your list of courses for the semester will be sent a week after opening the portal but you'd have been given a printed list at the reception already. Have a great stay at Burham.</p>
                <button onClick={handleSignout} className='bg-white py-3 px-4 rounded-xl md:rounded-2xl border text-orange-400 font-semibold text-lg hover:bg-transparent hover:text-white hover:rounded-none transition-all linear duration-200 ml-3 mb-2'>Log out</button>
            </div>


        </div>
    )
}
