import  db  from '../../firebase-config'
import { collection, addDoc, deleteDoc, doc, query, where, getDocs, serverTimestamp, updateDoc} from 'firebase/firestore';


export const registerEmail = async(email, latestNum) =>{
    //ref do not specify id to let db generate auto ID
    const collectionRef = collection(db, "emails");
    const payload = {email: email, number: latestNum+1, timeStamp: serverTimestamp()}
    const docRef = await addDoc(collectionRef, payload);
    console.log(docRef.id)
}

export const updateEmail = async (id, originalNum, emailProvided) =>{
    const docRef = doc(db, "emails", id);

    const payload = {email: emailProvided, number: originalNum};

    updateDoc(docRef, payload);
}

export const deleteEmail = async(id) =>{
    const docRef = doc(db, "emails", id);
    await deleteDoc(docRef);
}

export const qDeleteEmail = async(id) =>{
    const userInputKeyword = prompt("Enter keyword that the email(s) START WITH")
    const collectionRef = collection(db, "emails");
    const q = query(collectionRef, where('email', '>=', userInputKeyword), where('email', '<=', userInputKeyword+ '~'));
    const snapshot = await getDocs(q);
    const results = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    console.log(results);

    //forEach to not altering array's result, just perform delete.
    results.forEach(async (result) => {
        const docRef = doc(db, "emails", result.id);
        await deleteDoc(docRef);
    })
}