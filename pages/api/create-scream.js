import firebase from "firebase";
import firebaseApp from "./firebase_config";
const db = firebase.firestore();

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(400).json({ error: "Method not allowed" });
  }
  try {
    const newScream = {
      body: req.body.body,
      userHandle: req.body.userHandle,
      createdAt: new Date().toISOString(),
    };
    const response = await db.collection("screams").add(newScream);
    res.status(201).json({ msg: `Document of id ${response.id} was added` });
  } catch (error) {
    console.log("Error:" + error);
    res.status(500).json({ error: error.code });
  }
};
