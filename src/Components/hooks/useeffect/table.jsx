import Table from 'react-bootstrap/Table';

export function MyTable({headings=[], data=[]}) {
  return (
    <Table   striped bordered hover>
      <thead>
        <tr>
            {
                headings.map(eachHead=><th>{eachHead}</th>
          
                )
            }
          
        </tr>
      </thead>
      <tbody>
        {
            

           
                data.map(eachObj=>{
                    
                    return <tr>
                        {
                            headings.map(eachHead=> {
                                
                            return <td>{(typeof eachObj[eachHead] == 'object')?'None':eachObj[eachHead]}</td>}
                        )
                        }
                    </tr>
                   
                })
        
        }
       


      </tbody>
    </Table>
  );
}

