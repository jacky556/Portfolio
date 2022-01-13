import React, { useState, useEffect, useRef } from 'react'
import './emailsystem.css'
import Axios from 'axios'

const Emailsystem = () => {

    const [email, setEmail] = useState("");

    const[emailList, setEmailList] = useState([]);

    const[emailShowing, setEmailShowing] = useState(false);

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const isFirstRender = useRef(true);


    const searchBeforeAdd = () =>{
        Axios.post("http://localhost:3001/check", {addword: email}).then((response) =>{
            setAddword(response.data[0].email)
        }).catch((error) => { setAddword("NotExist") });
    }

    const check = () =>{
        if(email.match(mailformat)){
            searchBeforeAdd();
        }
        else {
            alert('invalid email.');
            setEmail("");
            setAddword("");
        }
    }
   

    const addEmail = () =>{
        //create is corresponding to server'index.js' app.post
        //send body{key, value} object to back-end
        Axios.post('http://localhost:3001/create', 
        //As we don't know WHEN the request is done,
        //This is a PROMISE function with 'then' & 
        {email: email}).then(() =>{
            console.log("success");
            /* if want to update fron-end displayed data right after
            data posted from above post function, do below codes to
            add values to react while posting to the database */
            if(emailShowing === true){
                setEmailList([...emailList,{
                    email: email
                },
                ]);
            }
        })
        setEmail("");
        setAddword("");
    }



    //get emails as a list from the database
    //to get response, type 'then(response) // << response is the response from database
    //after below getEmails function, connect end point at server index.js and in the component(which is /emails)in below & created on our own
    //which is to create app.get()
    const getEmails = () =>{
        Axios.get("http://192.168.31.224:3001/emails").then((response) =>{
            setEmailList(response.data);
        });
        setEmailShowing(true);
    };

    const[keyword, setKeyword] = useState("");
    const[addword, setAddword] = useState("");

    const searchKeyword = () =>{
        Axios.post("http://localhost:3001/search", {keyword: keyword}).then((response) =>{
            setEmailList(response.data);
        });
        setEmailShowing(false);
    }

    const search = (e) => {
        if(e.key === 'Enter') {
            searchKeyword();      
        }
    }


    const [modifyLock, setModifyLock] = useState(true);
    const [selectedID, setSelectedID] = useState(0);
    const [selectedAction, setSelectedAction] = useState("");
    const [emailProvided, setEmailProvided] = useState("");

    const modifyEmail = () =>{
        Axios.post("http://localhost:3001/modify", {
            selectedID: selectedID,
            selectedAction: selectedAction,
            emailProvided: emailProvided
        }
        ).then(() =>{
            if (selectedAction === "UPDATE"){
                searchUpdatedRow();
                setEmailProvided("");
                setSelectedAction("");
                setSelectedID(0);
                setKeyword("");
            }
            else if (selectedAction === "DELETE"){
                getEmails();
                setEmailProvided("");
                setSelectedAction("");
                setSelectedID(0);
                setKeyword("");
            }
        });
    }

    const searchUpdatedRow = () =>{
        Axios.post("http://localhost:3001/search", {keyword: emailProvided}).then((response) =>{
            setEmailList(response.data);
        });
        setEmailShowing(true);
    }

    const pressUpdatedRow = (e) => {
        if(e.key === 'Enter') {
            searchUpdatedRow();      
        }
    }

    useEffect(() => {
        if (isFirstRender.current) {
          isFirstRender.current = false;
        }
        else if (addword !== ""){
            if(addword === email){
                //total fucking same here
                console.log("word after update", addword);
                console.log("email after update", email);
                alert('Email Already Exist!');
                setEmail("");
                setAddword("");
            }
            else if(addword === "NotExist"){
                console.log("word after update", addword);
                console.log("email after update", email);
                alert('Email Succesfully Registered.')
                Axios.post('http://localhost:3001/create', 
                {email: email}).then((response) =>{
                    console.log("success");
                    if(emailShowing === true){
                        setEmailList([...emailList,{
                            id: response.data.insertId,
                            email: email
                        },
                        ]);
                    }
                })
                setEmail("");
                setAddword("");
            }
        }

      }, [addword, email, emailList, emailShowing]);
      

    return (
        <div className='section__margin'>
            <div className = "content__input">
                <input type = "text" placeholder = "Input an email. System will check if invalid or email-existed." value = {email} onChange={(event) =>{
                    setEmail(event.target.value);
                }}></input>

            </div>
            <div className= 'content__options'>
                <button type = "button" onClick={check}>Register Email</button>
                <button type = "button" onClick={getEmails}>Show All Registered Emails</button>
            </div>
            <div className='manageBlock'>
                <div className='manageBlock__searchBar'>
                    <input type= "text" placeholder= "Search Input" value = {keyword} onChange={(event) => {
                        setKeyword(event.target.value);
                    }} onKeyDown={search}></input>
                    <button type = "button" onClick={searchKeyword}>Search Email</button>
                </div>
                <div className ='manageBlock__emailManage'>
                    {emailList.map((val /*<<database object*/, key) => {
                    return (
                        <div className = 'manageBlock__emailManage__emailrows'>
                            <div className = 'manageBlock__emailManage__emailrows__emailsection'>
                                <h1>ID: {val.id}</h1>
                                <h4>Email: {val.email}</h4>
                            </div>
                            <div className = 'manageBlock__emailManage__emailrows__buttonsection'>
                                <button type='button' id = {val.id} value = "UPDATE" onClick={(e)=>
                                    {
                                        console.log(e.target.value + e.target.id);
                                        setModifyLock(false);
                                        setSelectedID(e.target.id);
                                        setSelectedAction(e.target.value);
                                    }
                                    }>UPDATE</button>
                                <button type='button' id = {val.id} value = "DELETE" onClick={(e)=>
                                    {
                                        console.log(e.target.value + e.target.id);
                                        setModifyLock(false);
                                        setSelectedID(e.target.id);
                                        setSelectedAction(e.target.value);
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
                    <button type = "button" onClick={()=>{
                        alert("Now going to " + selectedAction + selectedID);
                        modifyEmail();
                        setModifyLock(true)
                    }} disabled = {modifyLock}>CONFIRM {selectedAction}</button>
                </div>
            </div>
        </div>
        
    )
}

export default Emailsystem