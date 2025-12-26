import { auth } from "@/app/assets/firebase";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";

export async function LogInFirebase(email: string, password: string) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    throw error.code;
  }
}
