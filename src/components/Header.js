import React ,{useEffect} from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import {addUser,removeUser} from "../utils/userSlice"
import { LOGO , USER_AVATAR } from '../utils/constants';


const Header = () => {

  const dispatch=useDispatch();

  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)

  const handleSignOut=()=>{
    signOut(auth).then(() => {    
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-40'
        src={LOGO} alt='logo'/>
        {user &&  <div className='flex p-2'>
          <img
          className='w-12 h-12'
          alt='user-icon' src={USER_AVATAR}/>
          <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
        </div>}
    </div>
  )
}

export default Header
