"use server";

import { db, storage } from "@/app/assets/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { IsAdmin } from "./login";

export async function UploadPost(
  currentUser: any,
  heading: string,
  short_desc: string,
  images: Blob[],
  long_desc: string,
  url: string,
) {
  if (!currentUser || !IsAdmin(currentUser.uid)) {
    throw {
      message: "Failed to upload project: User permissions are insufficient",
    };
  }

  try {
    const randomImageUUIDs = images.map(() => crypto.randomUUID());

    // Upload document
    const docRef = await addDoc(collection(db, "projects"), {
      heading: heading,
      short_desc: short_desc,
      long_desc: long_desc,
      likes: 0,
      comments: 0,
      date: serverTimestamp(),
      images: [...randomImageUUIDs],
      url: url,
    });

    // Upload Images
    const uploadPromises: Promise<any>[] = [];

    images.forEach((img, index) => {
      const storageRef = ref(
        storage,
        `images/${docRef.id}/${randomImageUUIDs[index]}`,
      );
      uploadPromises.push(
        uploadBytes(storageRef, img, { contentType: img.type }),
      );
    });

    await Promise.all(uploadPromises);
  } catch (error: any) {
    throw `Failed to upload project: ${error.message}`;
  }
}

export async function GetPosts() {
  try {
    const collRef = collection(db, "projects");
    const q = query(collRef, limit(100));
    const querySnap = await getDocs(q);
    const posts = querySnap.docs.map((doc) => ({
      ...doc.data(),
      doc_id: doc.id,
    }));

    return JSON.stringify(posts);
  } catch (err: any) {
    throw `Failed to retrieve posts: ${err.message}`;
  }
}

export async function GetPostById(doc_id: string) {
  try {
    const docRef = doc(db, "projects", doc_id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return JSON.stringify({ ...docSnap.data(), doc_id: docRef.id });
    } else {
      throw ``;
    }
  } catch (_) {
    throw `Failed to retrieve data`;
  }
}

export async function GetImagesByPostId(doc_id: string, imageUIDs: string[]) {
  try {
    const pathReference = ref(storage, `images/${doc_id}`);

    const imageURLs = await Promise.all(
      imageUIDs.map((uid) =>
        getDownloadURL(ref(storage, `${pathReference}/${uid}`)),
      ),
    );

    return JSON.stringify(imageURLs);
  } catch (error: any) {
    throw `Failed to retrieve the project images: ${error.message}`;
  }
}

export async function DeletePostById(
  currentUser: any,
  doc_id: string,
  imageUIDs: string[],
) {
  if (!currentUser || !IsAdmin(currentUser.uid)) {
    throw {
      message: "Failed to delete project: User permissions are insufficient",
    };
  }

  try {
    // Delete all images
    const pathReference = ref(storage, `images/${doc_id}`);

    const imageURLs = await Promise.all(
      imageUIDs.map((uid) =>
        deleteObject(ref(storage, `${pathReference}/${uid}`)),
      ),
    );

    // Delete all documents
    const docRef = doc(db, "projects", doc_id);
    await deleteDoc(docRef);
  } catch (error: any) {
    throw `Failed to delete project: ${error.message}`;
  }
}

export async function UpdateLikeCount(doc_id: string, like: boolean) {
  try {
    const docRef = doc(db, "projects", doc_id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) throw { message: "Failed to retrieve data" };

    const likes = Math.max(0, docSnap.data().likes + (like ? +1 : -1));

    await updateDoc(docRef, {
      likes: likes,
    });

    return likes;
  } catch (err: any) {
    throw `Failed to like post: ${err.message}`;
  }
}
