import { firebase, app, db } from '../../db/firebase'
import { addDoc, updateDoc, doc, collection } from 'firebase/firestore';

export default async function handler(req, res) {

  const { title, task } = req.query;

  const docRef = await addDoc(collection(db, "Task"), {
    title: title,
    task: task
  });
  // console.log("Document written with ID: ", docRef.id);

  const docUpdated = await updateDoc(doc(db, "Task", docRef.id), {
    __id: docRef.id
  })

  res.json({ success: "success" });
}