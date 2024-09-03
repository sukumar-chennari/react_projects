import Table from 'react-bootstrap/Table';
import { GrDocumentUpdate } from "react-icons/gr";

function CustomTable({ data = [], sendDataToParent , bgColor=''}) {
  const sendData = (id,buttonText) => {
    sendDataToParent(id,buttonText);  // Pass the correct ID to the parent component
  };

  return (
    <Table  style={{backgroundColor:(bgColor)?(bgColor):('white')}} striped bordered hover >
      <thead>
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Number</th>
          <th>Model</th>
          <th>Issue</th>
          <th>Delete User</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((eachUser) => (
          <tr key={eachUser.id}>
            <td>{eachUser.id}</td>
            <td>{eachUser.username}</td>
            <td>{eachUser.Number}</td>
            <td>{eachUser.Model}</td>
            <td>{eachUser.Issue || 'No issue reported'}</td>
            <td>
              <button onClick={() => sendData(eachUser.id,'delete')}>Delete</button>
            </td>
            <td>
              <button onClick={() => sendData(eachUser.id,'edit')}><GrDocumentUpdate /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CustomTable;
