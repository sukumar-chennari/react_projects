import axios, { all } from "axios";
import { useRef, useState } from "react";
import Table from 'react-bootstrap/Table';
import { CustomImage } from "../../image/image";
const Form = () => {
    const username=useRef('')
    const pass=useRef('')

    const [formError,setFormError]=useState({})
    const [eachItem, setEachItem]=useState({})
    const [allItems, setAllItems]=useState([])
    const onSubmit=(e)=>{
        e.preventDefault()
        const usernameEntered=username.current.value
        const passwordEntered=pass.current.value

       const FormErrors=validation(usernameEntered,passwordEntered)

        if(Object.keys(FormErrors).length>0){
            alert('form throwed error')
            setFormError(FormErrors)
        }
        else{
           loginApi(usernameEntered,passwordEntered)
        }
        
    }

    const loginApi=async (username,password)=>{
        try{
            let {data}=await axios.post('https://dummyjson.com/auth/login', {
    
                "username": username,
                "password": password,
                "expiresInMins": 30
              })

              //

              setEachItem(data)
              setAllItems([...allItems,data])
        }
        catch(err){
            
        }
    }

    const validation=(username,password)=>{
        const FormErrors={}
        if(!username){
            FormErrors['username Error']='empty length'
        }
        else if(username.length<6){
            FormErrors['username Error']='Enter username greater than 7'
        }

        if(!password){
            FormErrors['pass Error']='empty password '
        }else if(password.length<8){
            FormErrors['pass Error']='enter minimum length'
        }

        return FormErrors
    }

    const deleteUser=(userId)=>{
        const updatedUsers= allItems.filter(eachUser=>eachUser.id!==userId)

        setAllItems(updatedUsers)
    }
  return (
    <>
        <h1 style={{textAlign:'center'}}>Enter User details</h1>
        <div style={{display:'flex', justifyContent:'center',marginTop:'10px'}}>
        <form onSubmit={onSubmit} style={{width:'50%',padding:'20px', border:'2px solid gray'}}>
        <div className="form-group">
          <label htmlFor="username">User name:</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={username}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
          <span>{formError?.['username Error']}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="username"
            placeholder="Password"
            ref={pass}
          />
          <span>{formError?.['pass Error']}</span>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
        </div>
    

      <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {
            allItems.map(eachUser=>{
                {}
                return <tr>
                    <td>{eachUser.id}</td>
                    <td>{eachUser.firstName}</td>
                    <td>{eachUser.lastName}</td>
                    <td>{eachUser.username}</td>
                    <td><CustomImage source={eachUser.image}/></td>
                    <button onClick={()=>deleteUser(eachUser.id)} style={{padding:'10px', marginTop:'90px', marginLeft:'5px'}}>Delete User</button>
                </tr>
            })
        }
        
      </tbody>
    </Table>

      </div>
    </>
  );
};

export {Form}