import Table from "react-bootstrap/Table";
import { CustomImage } from "../image/image";

export function CustomeTable({ data = [] }) {
  //console.log('th',th)
  //console.log('data',data)
  const size=Object.keys(data[0])
  console.log(size)
  return (
    <Table striped bordered hover style={{marginTop:'0px',  padding:'10px',backgroundColor:'red'}}> 
      <thead >
        <tr >
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th>Cateogory</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {data.map((eachData) => {
          return (
            <tr key={eachData.id}>
              <td>{eachData.id}</td>
              <td>{eachData.title}</td>
              <td>{`$ ${eachData.price}`}</td>
              <td>{eachData.description}</td>
              
              <td>{eachData.category}</td>   
              <td><CustomImage source={eachData.image} /></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default CustomeTable;
