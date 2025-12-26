import { db, storage } from "@/app/assets/firebase";
import { collection, addDoc } from "firebase/firestore/lite";
import { ref, uploadBytes } from "firebase/storage";

export async function UploadPost(
  heading: string,
  short_desc: string,
  images: Blob[],
  long_desc: string,
) {
  try {
    // Upload document
    const docRef = await addDoc(collection(db, "projects"), {
      heading: heading,
      short_desc: short_desc,
      long_desc: long_desc,
      likes: 0,
      comments: 0,
      date: new Date(),
    });

    // Upload Images
    const uploadPromises: Promise<any>[] = [];

    images.forEach((img, index) => {
      const storageRef = ref(
        storage,
        `images/${docRef.id}/${crypto.randomUUID()}`,
      );
      uploadPromises.push(uploadBytes(storageRef, img));
    });

    await Promise.all(uploadPromises);
  } catch (error: any) {
    throw `Failed to upload project: ${error.message}`;
  }
}
