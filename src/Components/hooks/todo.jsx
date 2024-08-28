import { useState } from "react";
import { CreateTodoList } from "./jshelpers"; // Assumed to be a helper function that generates the todo list
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TodoList = () => {
    const [todos, setTodos] = useState(CreateTodoList()); // Initialize state with a list of todos

    const clickHandler=()=>{
        const myobj={
            'id':todos.length+1,
            'text':`Item ${todos.length+1} `
        }
        setTodos([...todos,myobj])
    }

    const deleteHandler=(id)=>{
            const temp=todos.filter(item=>item.id!=id)
            setTodos(temp)
    }

    const updateHandler=(id)=>{
        const mytext=prompt('Enter the text')
        const updatedArray=todos.map(eachItem=>{
            if(eachItem.id===id){
                return {...eachItem,text:mytext}
                
            }
            return eachItem
        })
        setTodos(updatedArray)
    }
    return (
        <>
            <button onClick={clickHandler}>Add Item</button>
            <div style={{display:'flex', flexWrap:'wrap', textAlign:'center', padding:'10px'}}> 
            {todos.map(each => (
                <Card style={{ width: '19rem',margin:'2px' }} key={each.id}>
                    <Card.Body>
                        <Card.Title>{each.id}</Card.Title>
                        <Card.Text>
                            {each.text}
                        </Card.Text>
                        <Button style={{margin:'2px'}} variant="primary" onClick={()=>deleteHandler(each.id)}>Delete</Button>
                        <Button variant="primary" onClick={()=>updateHandler(each.id)}>Update</Button>
                    </Card.Body>
                </Card>
            ))}
            </div>
        </>
    );
};

export { TodoList };
