import Table from "react-bootstrap/Table";
import { CustomImage } from "../image/image";

export function CustomeTable({ data = [] }) {
  //console.log('th',th)
  //console.log('data',data)
  const size=Object.keys(data[0])
  console.log(size)
  return (
    <Table striped bordered hover style={{marginTop:'32px',  padding:'10px',backgroundColor:'red'}}> 
      <thead >
        <tr >
          {data.length > 0 &&
            Object.keys(data[0]).map((head,id) => {if(id<size){ return <th key={head}>{head}</th>}})}
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
