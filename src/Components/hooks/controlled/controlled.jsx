import { useState } from "react";
import { singleValidator } from "./validators.js";

export const ControlledForm = () => {
    let intialData={
      username:'',
      mobileNumber:'',
      mobileModel:'Galaxy j7',
      issue:''
    }
  const [flag,setFlag]=useState(false)
  const [formData,setFormData]=useState(intialData)
  const [formError,setFormError]=useState({
    nameErr:'',
    mobileErr:'',

  })

  const onChangeHandler=(event)=>{
    const {name,value}=event.target
    
    setFormData({...formData,[name]:value})
    const errorObj=singleValidator(formData)
    if(Object.keys(errorObj).length>0){
      const {usernameErr,mobileNumberErr}=errorObj
      let obj={
        nameErr:usernameErr,
        mobileErr:mobileNumberErr
      }
      setFormError(obj)
    }
    console.log(formError)
  }

    const submitHandler=(event)=>{
      event.preventDefault()
      const {username,mobileNumber}=formData
      if(username.length ==0 || mobileNumber.length==0)
          alert('Please fill the form ') 
        
      setFlag(true)
        // event.preventDefault()
        // if(nameError || numberError){
        //     alert('Enter the valid details')
        // }else{
        //     //hit the server
        //     if(username.length==0 || number.length==0 )
        //       alert("Enter the form details")
        //     else{
        //       setFlag(true)
        //       let obj={
        //         "username":username,
        //         "Number":number,
        //         "Model":model,
        //         'Issue':issue
        //       }
             
        //       postData(obj)
        //     }
           
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
             name="username"
             id="username"
             placeholder="name"
             value={formData.username}
             onChange={onChangeHandler}
           />
            {formError.nameErr &&  <span style={{color:'red'}}>{formError.nameErr}</span>}
         </div>
         <div className="form-group">
           <label htmlFor="mobile">Mobile Number</label>
           <input
             type="text"
             className="form-control"
             id="username"
             placeholder="Mobile number"
             name="mobileNumber"
             value={formData.mobileNumber}
             onChange={onChangeHandler}
           />
           {formError.mobileErr&&  <span style={{color:'red'}}>{formError.mobileErr}</span>}
         </div>
 
         <div className="form-group">
           <label htmlFor="exampleFormControlSelect1">Select Model</label>
           <select onChange={onChangeHandler} className="form-control" id="exampleFormControlSelect1" name="mobileModel" value={formData.mobileModel}>
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
             name="issue"
             value={formData.issue}
             onChange={onChangeHandler}
           />
         </div>
         <button  className="btn btn-primary">Submit</button>
       </form>
     ): (
        <div className="alert alert-success">
            Form submitted successfully!
        </div>
    )}

      {/* <CustomTable data={allUserData}  sendDataToParent={handleDataFromChild}/> */}
    </>
  );
};
