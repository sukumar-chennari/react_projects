import { useState } from "react";

export const Modal = ({ closeModal,getData }) => {
    let intialData={
        "username":'',
        "password":'',
        "age":'10-18',
        "feedback":''
    }

    const [userData,setUserData]=useState(intialData)
    const onChangehandler=(e)=>{
        let {name,value}=e.target
        console.log(name, value)
        let obj={...userData,[name]:value }
        setUserData(obj)
    }

    const onSubmitHandler=()=>{
        
        alert('form submitted successfully')
        localStorage.setItem('userData',JSON.stringify(userData))
        closeModal()
        getData()  
    }

  return (
    <div className="modal" tabIndex={-1} style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add User</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form  onSubmit={onSubmitHandler}>
              <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">
                Email/Username:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter email/username"
                  name="username"
                  onChange={onChangehandler}
                  value={userData.username}
                  
                />
              </div>

              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  name="password"
                  value={userData.password}
                  onChange={onChangehandler}
                />
              </div>

              <div className=" mb-3">
                <label htmlFor="age" className="form-label">
                  Select Age:
                </label>
                <select 
                    class="form-select"
                    name="age"
                    value={userData.age}
                    onChange={onChangehandler}
                >
                  <option>10-18</option>
                  <option>19-30</option>
                  <option>30-45</option>
                  <option> greater that 45</option>
                </select>
              </div>

              <div className=" mb-3">
                <label htmlFor="age" className="form-label">
                  About you:
                </label>

                <label for="comment">Comments:</label>
                <textarea class="form-control" rows="5" id="comment" 
                    name="feedback"
                    value={userData.feedback}
                    onChange={onChangehandler}
                  >

                  </textarea>
                
              </div>
            
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeModal}
            >
              Close
            </button>
            <button type="button" onClick={onSubmitHandler} className="btn btn-primary">
              Save Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
