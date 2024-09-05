import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FaRegEdit } from "react-icons/fa";

function CustomTable({data,showModal}) {
  console.log(data)
  const [currentItem,setCurrentItem]=useState({})
  const editHandler=(id)=>{
    showModal()
    let currentItem=data.filter(each=>each.id==id)
    console.log(id)
    console.log('current',currentItem)
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th> Username</th>
          <th>Password</th>
          <th>Age</th>
          <th>About User</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {data.map((user, index) => (
                    <tr key={index}>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{index+1}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{user.username}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{user.password}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{user.age}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{user.feedback}</td>
                        <td><button onClick={()=>{editHandler(index+1)}}><FaRegEdit /></button></td>
                    </tr>
                ))}
   
 
      </tbody>
    </Table>
  );
}

export default CustomTable;