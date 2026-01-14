"use server";

import { auth, db } from "@/app/assets/firebase";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { doc, getDoc } from "firebase/firestore";

export async function LogInFirebase(email: string, password: string) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    throw error.code;
  }
}

export async function IsAdmin(uid: string) {
  try {
    const docRef = doc(db, "admins", uid);
    const docSnap = await getDoc(docRef);

    return docSnap.exists();
  } catch (error) {
    throw "Failed to check if user is admin";
  }
}
