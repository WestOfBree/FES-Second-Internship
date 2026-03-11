"use client";
import { useState } from "react";
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
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function register() {
    // Registration logic using auth
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully registered
        const user = userCredential.user;
        console.log("User registered:", user);
        login(); // Automatically log in after registration
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
        setErrorMessage("Error logging in: " + error.message);
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
      setErrorMessage("Error signing out: " + error.message);
    });
}

if (isRegisterMode) {
  return (
    <>
      {isOpen && isRegisterMode && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ×
            </button>
            <h2 style={{ display: "flex", justifyContent: "center", fontSize: "24px" }}>Register for Summarist</h2>
             <form
              onSubmit={(e) => {
                e.preventDefault();
                register();
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
                Register
              </button>
              </form>

              </div>
        </div>
      )}
    </>
  );
}
  return (
    <>
      {isOpen && (
      <div className="modal-overlay" onClick={() => setIsOpen(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ×
        </button>

        <h2 style={{ display: "flex", justifyContent: "center", fontSize: "24px" }}>Login to Summarist</h2>
          <button className="guestLogin--btn btn" onClick={loginAsGuest}>
          <FaUserAstronaut />
          Login as a Guest
          </button>
        <div className="divider">or</div>
        <button className="googleLogin--btn btn" onClick={() => alert("Work in progress")}>
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
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "15px", color: "red" }} className="error-message">{errorMessage}</div> 
          <button className="btn" type="submit">
          Login
          </button>
          <a href="#" onClick={() => alert("That sucks...")}>Forgot Password?</a>
          <br />
          <a href="#" onClick={() => setIsRegisterMode(true)} className="register-link">
          Don't have an account? Register
          </a>
        </form>
        </div>
      </div>
      )}

    </>
    );
}
