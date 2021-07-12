import firebase from "./firebase_config";

const db = firebase.firestore();

export default async (req, res) => {
  if (req.method !== "GET") {
    return res.status(400).json({ error: "Method not allowed" });
  }
  try {
    const response = await db
      .collection("screams")
      .orderBy("createdAt", "desc")
      .get();
    const data = response;
    let screams = [];
    data.forEach((doc) => {
      screams.push({
        screamId: doc.id,
        ...doc.data(),
      });
    });
    res.status(200).json(screams);
  } catch (error) {
    console.log("Error:" + error);
    res.status(500).json({ error: error.code });
  }
};
