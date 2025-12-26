import { db, storage } from "@/app/assets/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
} from "firebase/firestore/lite";
import { ref } from "firebase/storage";

export async function GetPosts() {
  try {
    const q = query(collection(db, "projects"), limit(100));
    const querySnap = await getDocs(q);
    const posts = querySnap.docs.map((doc) => ({
      ...doc.data(),
      doc_id: doc.id,
    }));

    return posts;
  } catch (err: any) {
    throw `Failed to retrieve posts: ${err.message}`;
  }
}

export async function GetPostById(doc_id: string) {
  try {
    const docRef = doc(db, "projects", doc_id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { ...docSnap.data(), doc_id: docRef.id };
    } else {
      throw ``;
    }
  } catch (_) {
    throw `Failed to retrieve data`;
  }
}

export async function GetImagesByPostId(doc_id: string) {
  try {
    const pathReference = ref(storage, `images/${doc_id}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { ...docSnap.data(), doc_id: docRef.id };
    } else {
      throw ``;
    }
  } catch (_) {
    throw `Failed to retrieve data`;
  }
}
