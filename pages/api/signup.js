import firebase from "firebase";
import firebaseApp from "./firebase_config";

const auth = firebase.auth();
const db = firebaseApp.firestore();

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(400).json({ msg: "Method not allowed" });
  }
  try {
    const newUser = {
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      handle: req.body.handle,
    };
    // TODO: validate data
    const handleResp = await db.doc(`/users/${newUser.handle}`).get();

    //   check if user existes
    if (handleResp.exists) {
      // if true
      return res.status(400).json({ error: "This handle is already taken!" });
    } else {
      //   if does not exists
      const response = await auth.createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
      );

      // creating a token id after succesful sign in
      const data = response.user;
      const token = await data.getIdToken();
      return res.status(201).json({
        token,
      });
    }
  } catch (error) {
    console.log(error);
    if (error.code === "auth/email-already-in-use") {
      return res.status(400).json({ error: `Email already in use!` });
    } else {
      return res.status(500).json({ error: error.code });
    }
  }
};
