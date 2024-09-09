import { Fragment, useReducer, useState } from "react";
import Table from "react-bootstrap/Table";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


const reducer = (state, action) => {
  switch (action.type) {
    case "USERNAME":
      return { ...state, username: action.payload };
    case "AGE":
      return { ...state, age: action.payload };
    case "TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "DELETE_TODO":
        return {...state,todos:state.todos.filter((_,index)=>index!==action.payload)}
    case 'UPDATE_DATA':
        const updatedTodos=[...state.todos]
        updatedTodos[action.payload.id]=action.payload.newValue
        return {...state,todos:updatedTodos}
  }
};
export const TODO = () => {
  const intialState = {
    username: "Sukumar",
    age: 21,
    todos: [],
  };
  const [currentState, dispatch] = useReducer(reducer, intialState);

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [enteredTodo, setEnteredTodo] = useState([]);
  const [showInput,setShowInput]=useState(false)
  const [updateRowId,setUpdateRowId]=useState(null)
  const [updatedData,setUpdatedData]=useState('')

  const nameHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };
  const todoHandler = (e) => {
    setEnteredTodo(e.target.value);
  };

  const submitNameHandler = (e) => {
    e.preventDefault();
    if (username) {
      dispatch({
        type: "USERNAME",
        payload: username,
      });
    }
  };
  const submitAgeHandler = (e) => {
    e.preventDefault();
    if (age) {
      dispatch({
        type: "AGE",
        payload: age,
      });
    }
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (todoHandler) {
      dispatch({
        type: "TODO",
        payload: enteredTodo,
      });
    }
  };

  const deleteHandler=(id)=>{
    dispatch({
        type:'DELETE_TODO',
        payload:id
    })
  }

  const updateHandler=(id)=>{
    setShowInput(true)
    setUpdateRowId(id)
  }
  const updateInputHandler=(e)=>{
    setUpdatedData(e.target.value)
  }

  const submitUpdateHandler=(e)=>{
    e.preventDefault()
    if(updatedData && updateRowId!==null){
      dispatch({
        type:'UPDATE_DATA',
        payload:{id:updateRowId,newValue:updatedData}
      })
    }
    setShowInput(false)
    setUpdatedData('')
    setUpdateRowId(null)
  }
  return (
    <Fragment>
      <h1 style={{textAlign:'center'}}>TODO List</h1>
      <h2 style={{textAlign:'center',margin:'10px'}}>{`Username: ${currentState.username}  -> Age:${currentState.age}`}</h2>
      <div style={{ display: "flex", justifyContent: "space-around" ,margin:'10px'}}>
        <form onSubmit={submitNameHandler}>
          <input
            type="text"
            name="USERNAME"
            value={username}
            onChange={nameHandler}
          />
          <button>Change name</button>
        </form>

        <form onSubmit={submitAgeHandler}>
          <input type="text" value={age} name="AGE" onChange={ageHandler} />
          <button type="submit">Change Age</button>
        </form>
      </div>

      <div style={{ margin: "10px",textAlign:'center' }}>
        <form onSubmit={submitTodoHandler}>
          <input
            type="text"
            value={enteredTodo}
            name="AGE"
            onChange={todoHandler}
          />
          <button type="submit">Add to</button>
        </form>
      </div>

      

      <Table striped bordered hover style={{textAlign:'center'}}>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>TO Do</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
            {
                currentState.todos.map((eachTodo,index)=>{
                    return <tr key={index}>
                        <td>{index+1}</td>
                        <td>{eachTodo}</td>
                        <td onClick={()=>{deleteHandler(index)}}><MdDeleteOutline /></td>
                        <td onClick={()=>{updateHandler(index)}}><CiEdit />
                        {showInput && updateRowId === index && (
                  <form onSubmit={submitUpdateHandler}>
                    <input type="text" value={updatedData} onChange={updateInputHandler} />
                    <button type="submit">Update</button>
                  </form>
                )}
                </td>
                    </tr>
                })
            }

        </tbody>
      </Table>
    </Fragment>
  );
};
