import React from "react";
import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router";


function Auth() {
  const navigate = useNavigate();
  const signIn = async () => {
    const result = await signInWithPopup(auth, provider); // result include user info who just singin
    console.log(result);
    const authInfo = {
      userId: result.user.uid,
      name: result.user.displayName,
      profile: result.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
navigate("/tracker")  };

  return (
    <div className="flex flex-col min-h-screen justify-center  items-center mt-15">
      <p>Sign in with Google</p>
      <button
        className="p-2 rounded-md text-white mt-5 bg-blue-500 "
        onClick={signIn}
      >
        Sign in
      </button>
      {/* <button className='p-2 rounded-md text-white mt-5 bg-blue-500 ' onClick={signOut}>Sign Out</button> */}
    </div>
  );
}

export default Auth;
