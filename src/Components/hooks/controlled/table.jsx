import Table from 'react-bootstrap/Table';

function CustomTable({ data = [], sendDataToParent }) {
  const sendData = (id) => {
    sendDataToParent(id);  // Pass the correct ID to the parent component
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Number</th>
          <th>Model</th>
          <th>Issue</th>
          <th>Actions</th>
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
              <button onClick={() => sendData(eachUser.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CustomTable;
