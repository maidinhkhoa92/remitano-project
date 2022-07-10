import app from "./firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export const auth = getAuth(app);

export const authentication = ({ email, password }: { email: string; password: string}) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(111111, userCredential)
        resolve(userCredential._tokenResponse)
      })
      .catch((error) => {
        console.log(2, error)
        reject(error)
      });
  })
}
