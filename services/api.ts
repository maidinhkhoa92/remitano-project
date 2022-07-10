import app from "./firebase"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
export const auth = getAuth(app);

export const authentication = ({ email, password }: { email: string; password: string}) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        resolve(userCredential._tokenResponse)
      })
      .catch((_) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            resolve(userCredential._tokenResponse)
          })
          .catch((error) => {
            reject(error.message)
          });
      });
  })
}
