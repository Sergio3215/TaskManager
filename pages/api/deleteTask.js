import { db } from '../../db/firebase'
import { deleteDoc, doc } from 'firebase/firestore';

export default async function handler(req, res) {

  const { id } = req.query;

  await deleteDoc(doc(db,"Task",id));

  res.json({ success: "success" });
}