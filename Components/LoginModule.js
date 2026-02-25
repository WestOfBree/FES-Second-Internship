import { useState, useEffect } from "react";
import "./LoginModule.modal.css";
import { useRouter } from "next/navigation";
import { auth } from "../app/Firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInAnonymously,
} from "firebase/auth";
import { FaUserAstronaut} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function LoginModule({ isOpen, setIsOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function register() {
    // Registration logic using auth
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully registered
        const user = userCredential.user;
        console.log("User registered:", user);
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  }
function loginAsGuest() {
    // Login as guest logic using auth
    signInAnonymously(auth)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Guest user logged in:", user);
        setIsOpen(false);
        router.push("/ForYou");
      })
      .catch((error) => {
        console.error("Error logging in as guest:", error);
      });
  }

  function login() {
    // Login logic using auth
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log("User logged in:", user);
        setIsOpen(false);
        router.push("/ForYou");
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
    console.log("Login function called");
  }

  function logout() {
    // Logout logic using auth
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  }

  return (
    <>
      {/* <button onClick={() => setIsOpen(true)}>Login</button> */}

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ×
            </button>

            <h2>Login to Summarist</h2>
              <button className="guestLogin--btn btn" onClick={loginAsGuest}>
                <FaUserAstronaut />
                Login as a Guest
              </button>
            <div className="divider">or</div>
            <button className="googleLogin--btn btn">
              <span className="googleIcon--bg">
                <FcGoogle />
              </span>
              Login with Google
            </button>
            <div className="divider">or</div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                login();
              }}
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="btn" type="submit">
                Login
              </button>
              <a href="#" onClick={() => alert("That sucks...")}>Forgot Password?</a>
              <br />
              <a href="#" onClick={register} className="register-link">
                Don't have an account? Register
              </a>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
