import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';



const Dashboard = () => {
    var db;
    const [mydata, setMydata] = useState([])
    useEffect(function persistForm() {
            firebase.firestore().collection('submitted-form').get().then(function(g){
                setMydata(g.docs.map( doc => doc.data()))
            })
        });
    const [status, setStatus] = useState()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            setStatus(true)
        } else {
            setStatus(false)
        }
      });
    const loginuser = (e) =>{
        e.preventDefault();
        console.log("i'm clicked");
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(){
            console.log("success login")
        })
        .catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });
    }
    const logoutuser = (e) =>{
        e.preventDefault();
        firebase.auth().signOut().then(function() {
            console.log("success logout")
          }).catch(function(error) {
            // An error happened.
          });
    }
    let loginbtn = (
            (status)? (
                <button className="btn btn-primary btn-large" onClick={logoutuser}>
                    Logout
                </button>)
            : (
                <> 
                    <form className='formlogin form-group' style={{margin:"0 auto", width:"40%", minWidth:"350px"}}>
                        <input className='form-control my-2' type='text' onChange={(e) => setEmail(e.target.value)} value={email}></input>
                        <input className='form-control my-2' type='password' onChange={(e)=> setPassword(e.target.value)} value={password}></input>
                        <button className="btn form-control btn-primary btn-large" onClick={loginuser}>
                            Login
                        </button>
                    </form>
                </>
            )
    )
    let listelement = (status)? mydata.map(a => (
        <ul className='mt-5'>
            <li>{a.data.nama}</li>
            <li>{a.data.usia}</li>
            <li>{a.data.pekerjaan}</li>
            <li>{a.data.alamat}</li>
            <li>{a.data.lokasi}</li>
            <li className='mb-5'>{a.data.pengalaman}</li>
        </ul>
    )) : null
    return ( 
        <div className='container'>
            <h1>{(status)? "logged in": "logged out"}</h1>
            {loginbtn}
            <ul>
                {listelement}
            </ul>
        </div>
     );
}
 
export default Dashboard;