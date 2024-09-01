import { useState } from "react";
import './validators.js'
import { mobileValidator, usernameValidator } from "./validators.js";
import CustomTable from "./table.jsx";
import axios from "axios";

export const ControlledForm = () => {
    const [username,setUsername]=useState('')
    const [nameError,setNameError]=useState('')

    const [model,setModel]=useState('Samsung galaxy j7')
    const [issue,setIssue]=useState('')

    const [number,setNumber]=useState('')
    const [numberError,setMobileError]=useState('')
    const [flag,setFlag]=useState(false)

    const [allUserData,setAllUserData]=useState([])

    const [dataFromChild,setDataFromChild]=useState('')

    const usernameHandler=(event)=>{
        let {value}=event.target
        
        setUsername(value )
      const usernameError=usernameValidator(value)
      
      if(usernameError){
        setNameError(usernameError)
      }
      else{
        setNameError('')
      }

    }

    const selectHandler=(event)=>{
        setModel(event.target.value)
    }

    const mobileHandler=(event)=>{
        let {value}=event.target
        
        setNumber(value)
        const numError=mobileValidator(value)
        
        if(numError){
            
            setMobileError(numError)
        }
        else{
            setMobileError('')
        }
    }
    
    const issueHandler=(event)=>{
        
        setIssue(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault()
        if(nameError || numberError){
            alert('Enter the valid details')
        }else{
            //hit the server
            if(username.length==0 || number.length==0 )
              alert("Enter the form details")
            else{
              setFlag(true)
              let obj={
                "username":username,
                "Number":number,
                "Model":model,
                'Issue':issue
              }
             
              postData(obj)
            }
           
        }
    }   

    const fetchData=async ()=>{
      try{
        const response = await axios.get("http://localhost:3000/complaints");
        const data = response.data;
        setAllUserData(data); // Set the fetched data directly
        
      }
      catch(err){
        
      }
    }
    const postData=async (userData)=>{
      try{
        let {data}=await axios.post('http://localhost:3000/complaints',userData)
        fetchData()
        setUsername('');
        setModel('Samsung galaxy j7');
        setIssue('');
        setNumber('');
        setFlag(false);
      }
      catch(err){
        
      }
    }
    const deleteApiData=async (id)=>{
      try{
        let {data}=await axios.delete('http://localhost:3000/complaints/'+id)
        console.log(data)
        fetchData()
      }
      catch(err){
        console.log(err)
      }
    }
    const handleDataFromChild=(id)=>{
      setDataFromChild(id)

      deleteApiData(id)

      // if(id){
        

      //   let updatedUsers=allUserData.filter(each=>{return each.id !==id})

      //    setAllUserData(updatedUsers )
      // }


    }
    return (
    <>
     { !flag? (
         <form onSubmit={submitHandler} style={{width:'50%',padding:'20px', border:'2px solid gray'}}>
         <div className="form-group">
           <label htmlFor="username">Username</label>
           <input
             type="text"
             className="form-control"
             id="username"
             placeholder="name"
             value={username}
             onChange={usernameHandler}
           />
            {nameError &&  <span style={{color:'red'}}>{nameError}</span>}
         </div>
         <div className="form-group">
           <label htmlFor="mobile">Mobile</label>
           <input
             type="text"
             className="form-control"
             id="username"
             placeholder="name"
             value={number}
             onChange={mobileHandler}
           />
           {numberError&&  <span style={{color:'red'}}>{numberError}</span>}
         </div>
 
         <div className="form-group">
           <label htmlFor="exampleFormControlSelect1">Select Model</label>
           <select onChange={selectHandler} className="form-control" id="exampleFormControlSelect1" value={model}>
             <option>Samsung galaxy j7</option>
             <option>Samsung j7 pro</option>
             <option>Samsung galaxy s24 ultra </option>
             <option>Samsung Duos</option>
             
           </select>
         </div>
        
         <div className="form-group">
           <label htmlFor="exampleFormControlTextarea1">Your issue</label>
           <textarea
             className="form-control"
             id="exampleFormControlTextarea1"
             rows={3}
             
             value={issue}
             onChange={issueHandler}
           />
         </div>
         <button  className="btn btn-primary">Submit</button>
       </form>
     ): (
        <div className="alert alert-success">
            Form submitted successfully!
        </div>
    )}

      <CustomTable data={allUserData}  sendDataToParent={handleDataFromChild}/>
    </>
  );
};
