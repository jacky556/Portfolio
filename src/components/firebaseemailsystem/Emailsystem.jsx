import React, { useState, useEffect, useRef } from 'react'
import './emailsystem.css'
import  db  from '../../firebase-config'
import { collection, onSnapshot, orderBy, query, where, getDocs } from 'firebase/firestore';
import { registerEmail, updateEmail, deleteEmail, qDeleteEmail } from './Util'

const Emailsystem = () => {

    const isFirstRender = useRef(true);
    const [latestNum, setLatestNum] = useState();

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [email, setEmail] = useState("");
    const [emailList, setEmailList] = useState([]);
    const [addword, setAddword] = useState("");
    const [showAll, setShowAll] = useState(false);

    const [sortBy, setSortBy] = useState("ID(Desc)");
    const [keyword, setKeyword] = useState("");

    const [modifyLock, setModifyLock] = useState(true);
    const [selectedID, setSelectedID] = useState("");
    const [selectedNum, setSelectedNum] = useState();
    const [selectedAction, setSelectedAction] = useState("");
    const [emailProvided, setEmailProvided] = useState("");
    const [modifyConfirm, setModifyConfirm] = useState(false);

    //Get the number of the latest added email for manageRegisterEmail function
    //Occur in First Render by useEffect
    const getLatestNum = () =>{
        const collectionRef = collection (db, "emails");

        const q = query(collectionRef, orderBy("number", "desc"))
  
        onSnapshot(q, (snapshot) => {
            const list = (snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            setLatestNum(list[0].number)
        });
    }
    //Get all emails with specified(Default: ID(Desc)) order from cloud firestore
    //Called whenever "show all registered email" button onclick only.
    const getAllManage = () =>{
        const collectionRef = collection (db, "emails");
        let q = query();
        if(sortBy === "ID(Desc)")
        {
            q = query(collectionRef, orderBy("number", "desc"))
        }
        else if(sortBy === "ID(Asc)")
        {
            q = query(collectionRef, orderBy("number", "asc"))
        }
        else if(sortBy === "Email(Desc)")
        {
            q = query(collectionRef, orderBy("email", "desc"))
        }
        else if(sortBy === "Email(Asc)")
        {
            q = query(collectionRef, orderBy("email", "asc"))
        }

        onSnapshot(q, (snapshot) => {
            setEmailList(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
        });            
    }

    //Check if email in the first input field is valid or not
    //If valid, then send the email to database and check if it has any exact copy.
    //If duplicated, set addword as this email from database for useEffect to alert user.
    //If not, set addword "Not Exist" for useEffect to register Email.
    //Called whenver "Register Email" button onlick only.
    const searchBeforeAdd = async() =>{
        if(email.match(mailformat)){
            const collectionRef = collection(db, "emails");
            const q = query(collectionRef, where('email',"==", email ));
            const snapshot = await getDocs(q);
            const results = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
            if (results.length === 0)
                setAddword("Not Exist");
            else if(results.length !== 0)
                setAddword(results[0].email);
        }
        else{
            alert('invalid email.');
            setEmail("")
        }
    }
    //Register a email with the original latest number useState + 1 into the database.
    // E.g.:  ID:1, ID:7 => ID:1, ID:7, ID:8
    // E.g.:  ID:1, ID:2 => ID:1, ID:2, ID:3
    //Increase the orginal latest number useState by 1 to favor next register operation.
    //Reset Email Field
    const manageRegisterEmail = () =>{
        registerEmail(email, latestNum);
        setLatestNum(latestNum+1);
        setEmail("");
    }

    //Reset UPDATE/DELETE input field
    //Reset UPDATE/DELETE useStates
    //Reset SelectedID from the database
    //Called whenever a UPDATE/DELETE operation is done.
    const resetAllSelectedInputs = () =>{
        setEmailProvided("");
        setSelectedAction("");
        setSelectedID("");
    }

    //Modify Email based on values from the manageEmail Block
    //UPDATE/DELETE depends on which button is last clicked
    //Check if emailProvided has a valid email format, if not, alert and reset
    //Reset manageEmail Block inputs after modification to the database. Lock Confirm button to prevent user unnecessary input
    //After DELETE operation, get latest number is called for register email function.
    const manageModifyEmail = () => {
        if(selectedAction === "UPDATE"){
            if(emailProvided.match(mailformat)){
                alert("Now going to " + selectedAction + " Email with the ID " + selectedNum);
                updateEmail(selectedID, selectedNum, emailProvided);
                resetAllSelectedInputs();
                setModifyLock(true)
            }
            else {
                alert('invalid email.');
                setEmailProvided("")
            }
        }
        else if(selectedAction === "DELETE"){
            alert("Now going to " + selectedAction + " Email with the ID " + selectedNum);
            deleteEmail(selectedID);
            resetAllSelectedInputs();
            setModifyLock(true)
            getLatestNum();
        }         
    }
    //Allow user to press enter to perform modification.
    const pressUpdatedRow = (e) => {
        if(e.key === 'Enter') {
            manageModifyEmail();
            resetAllSelectedInputs();
        }
    }
    //Update information that needed to perform UPDATE modification.
    //Unlock confirm button
    const setUPDATEInfoAndUnlockConfirm = (e, val) =>{
        setSelectedAction(e.target.value)
        setSelectedID(val.id)
        setSelectedNum(val.number)
        setModifyLock(false);
    }
    //Update information that needed to perform DELETE modification.
    //Unlock confirm button
    const setDELETEInfoAndUnlockConfirm = (e, val) =>{
        setSelectedID(val.id);
        setSelectedNum(val.number);
        setSelectedAction(e.target.value);
        setModifyLock(false);
    }

    //Take input value from the emailProvided
    //declare variable q as query which varys based on the value of select tags
    //Due to Cloud Firestore operators limitation (% operator is not available), The query could only perform "Search email where Start With (input)"
    //Defaulted q shows default order from database.
    //declare variable list to store data returned from the snapshot after sorting(if needed, based on value of the selected tag).
    //Defaulted list returns data with attributes of "id, number, email".
    //id is the record's auto-generated ID in Cloud Firestore.
    //number is one of the record's field. It contains a number as the ID in perspective of Front-end user.
    //email is one of the record's field. It contains a string as the email. 
    const searchKeyword = () =>{
        const collectionRef = collection (db, "emails");
        let q = query(collectionRef, where('email', '>=', keyword), where('email', '<=', keyword+ '~'))

        if(sortBy === "Email(Desc)")
        {
            q = query(collectionRef, where('email', '>=', keyword), where('email', '<=', keyword+ '~'), orderBy('email','desc'))
        }
        else if(sortBy === "Email(Asc)")
        {
            q = query(collectionRef, where('email', '>=', keyword), where('email', '<=', keyword+ '~'), orderBy('email', 'asc'))
            
        }
        
        onSnapshot(q, (snapshot) => {
            let list = [];
            if(sortBy === "ID(Desc)")
        {
            list = (snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})).sort((a, b) => a.number > b.number ? -1 : 1))
        }
        else if(sortBy === "ID(Asc)")
        {
            list = (snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})).sort((a, b) => a.number > b.number ? 1 : -1))
        }
        else{
            list = (snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        setEmailList(list)
        });
        
    }
    //Enable user to press enter to perform search operation.
    const search = (e) => {
        if(e.key === 'Enter') {
            searchKeyword();
        }
    }


    console.log(latestNum)


   
    {/*
        //Always async await the api call "setDoc" to let the call do first
        const registerEmail = async() =>{
        const docRef = doc(db, "emails", "emails005");
        const payload = {email: "comyf@gmail.com", number: 5};
        await setDoc(docRef, payload)
        setEmail("");
        setAddword("");
    }
    */}

    {/*  
        const registerEmail = async() =>{
        //ref do not specify id to let db generate auto ID
        if(email.match(mailformat)){
            const collectionRef = collection(db, "emails");
            const payload = {email: email, number: latestNum+1}
            const docRef = await addDoc(collectionRef, payload);
            console.log(docRef.id)
            setLatestNum(latestNum+1);
        }
        else{
            alert('invalid email.');
            setEmail("");
            setAddword("");
    }
} */}


    useEffect(() => {
        if (isFirstRender.current) {
          isFirstRender.current = false;
          getLatestNum();
        }
        else if (showAll) {
            getAllManage();
        }
        else if (!showAll){
            searchKeyword();
        }

        if(modifyConfirm === true){
            searchKeyword();
            setModifyConfirm(false);
        }

        if(addword !== ""){
            if(addword === email){
                //total fucking same here
                console.log("word after update", addword);
                console.log("email after update", email);
                alert('Email Already Exist!');
                setEmail("");
                setAddword("");
            }
            else if(addword === "Not Exist"){
                console.log("word after update", addword);
                console.log("email after update", email);
                alert('Email Succesfully Registered.')
                manageRegisterEmail();
                setEmail("");
                setAddword("");
            }
        }
      }, [showAll, sortBy, addword, modifyConfirm]);

    return (
        <div className='section__margin'>
            <div className = "content__input">
                <input type = "text" placeholder = "Input an email. System will check if invalid or email-existed." value = {email} onChange={(event) =>
                    {
                        setEmail(event.target.value);
                    }
                }></input>

            </div>
            <div className= 'content__options'>
                {/* Below onClick is wrapped with empty function because
                registerEmail requires parameter */}
                <button type = "button" onClick={() => 
                {
                    searchBeforeAdd();
                }
                }>Register Email</button>
                <button type = "button" onClick= {() => 
                {
                    setShowAll(true);
                }
                }>Show All Registered Emails</button>
            </div>
            <div className='manageBlock'>
                <div className='manageBlock__searchBar'>
                    <input type= "text" placeholder= "Search email(s) that START WITH" value = {keyword} onChange={(event) => 
                        {
                            setKeyword(event.target.value);
                        }
                    } onKeyDown={search}></input>
                    <button type = "button" onClick={() => 
                        {
                            searchKeyword();
                        }
                    }>Search Email</button>
                </div>
                <div className='manageBlock__seleteTags'>
                    <div className='manageBlock__seleteTags__topic'>
                        <h1>Sort List by: </h1>
                    </div>
                    <select onClick={(e) => 
                        {
                            setSortBy(e.target.value)
                        }
                    }>
                        <optgroup label='ID Number'>
                            <option value='ID(Desc)'>ID (Desc)</option>
                            <option value='ID(Asc)'>ID (Asc)</option>
                        </optgroup>
                        <optgroup label = 'Email Address'>
                            <option value='Email(Desc)'>Email (Desc)</option>
                            <option value='Email(Asc)'>Email (Asc)</option>
                        </optgroup>
                    </select>
                </div>
                <div className ='manageBlock__emailManage'>
                    {emailList
                    .map((val /*<<database object*/, key) => {
                    return (
                        <div className = 'manageBlock__emailManage__emailrows' key={val.id}>
                            <div className = 'manageBlock__emailManage__emailrows__emailsection'>
                                <h1>ID: {val.number}</h1>
                                <h4>Email: {val.email}</h4>
                            </div>
                            <div className = 'manageBlock__emailManage__emailrows__buttonsection'>
                                <button type='button' value = "UPDATE" onClick={(e)=>
                                    {
                                        setUPDATEInfoAndUnlockConfirm(e, val);
                                    }
                                    }>UPDATE</button>
                                <button type='button' value = "DELETE" onClick={(e)=>
                                    {
                                        setDELETEInfoAndUnlockConfirm(e, val);
                                    }
                                    }>DELETE</button>
                            </div>
                        </div>
                    )
                })}
                </div>
                <div className='manageBlock__modifyBar'>
                    <input type= "text" placeholder= "UPDATE / DELETE email" value = {emailProvided} onChange={(event) => 
                        {
                            setEmailProvided(event.target.value);
                        }
                    } onKeyDown={pressUpdatedRow}
                    ></input>
                    <button type = "button" onClick={()=>
                        {
                            manageModifyEmail();
                            setModifyConfirm(true);
                        }
                    } disabled = {modifyLock}>CONFIRM {selectedAction} <br/>ID: {selectedNum}</button>
                </div>
                <div className='query_operate_section'>
                    <button type='button' onClick={()=>
                        {
                            qDeleteEmail()
                        }
                    }>DELETE Email(s) that START WITH</button>
                </div>
            </div>
        </div>
        
    )
}

export default Emailsystem
