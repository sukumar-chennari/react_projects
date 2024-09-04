import Table from 'react-bootstrap/Table';

function CustomTable({data}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th> Username</th>
          <th>Password</th>
          <th>About User</th>
        </tr>
      </thead>
      <tbody>
      {data.map((user, index) => (
                    <tr key={index}>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{user.username}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{user.password}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{user.age}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{user.feedback}</td>
                        
                    </tr>
                ))}
   
 
      </tbody>
    </Table>
  );
}

export default CustomTable;