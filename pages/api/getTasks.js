import { db } from '../../db/firebase'
import { getDocs, collection } from 'firebase/firestore';

export default async function handler(req,res){
    const taskCol = collection(db, 'Task');
  const taskSnapshot = await getDocs(taskCol);
  const taskList = taskSnapshot.docs.map(doc => doc.data());
  res.status(200).json(taskList)
}