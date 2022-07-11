import "./firebase"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import axios from "axios"
import { getYoutubeId } from "../utils/string"

export const auth = getAuth();
export const db = getFirestore();

export const authentication = ({ email, password }: { email: string; password: string}) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        resolve(userCredential.user)
      })
      .catch((_) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((response) => {
            resolve(response.user)
          })
          .catch((error) => {
            reject(error.message)
          });
      });
  })
}

export const insertVideo = (url: string) => {
  return new Promise((resolve, reject) => {
    // get youtube ID
    const id = getYoutubeId(url)

    // call youtube api
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${id}&key=AIzaSyBlmwODklfiRQCaIvv-dCb2mR55jqapoRY`)
      .then((response) => {
        if (response?.data?.items?.length) {
          const item = response?.data?.items.find((eq: any) => eq.id === id)
          addDoc(collection(db, "videos"), {
            id: item.id,
            title: item.snippet.title,
            description: item.snippet.description,
            email: auth?.currentUser?.email
          }).then(() => {
            resolve("Added successfully")
          }).catch((error) => {
            reject(error)
          });
        } else {
          throw new Error("Video not found.")
        }
      }).catch((error) => {
        reject(error)
      })
  })
}