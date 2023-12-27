// Install necessary packages:
// npm install firebase react-firebase-hooks tailwindcss

import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase with your project configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

function AdminLogin() {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithEmailAndPassword = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error.message);
    }
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        {user ? (
          <>
            <p>Welcome, {user.email}!</p>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded mt-4"
              onClick={signOut}
            >
              Sign out
            </button>
          </>
        ) : (
          <form className="space-y-4" onSubmit={signInWithEmailAndPassword}>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="py-2 px-3 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="py-2 px-3 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AdminLogin;
