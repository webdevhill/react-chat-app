import React from "react";
import GoogleSignin from "../img/googleSignIn.png";
import ChatIcon from "../img/chat-icon.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to Google Chat.</h2>
      <img src={ChatIcon} alt="chat icon" width={100} height={100} />
      <p>Sign in with Google to chat with with your fellow Web Developers.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
