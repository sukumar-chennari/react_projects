
export const CustomTable=()=>{
   return (
    <table>
        <TableHead></TableHead>
        <TableRow>
            <TableData></TableData>
        </TableRow>
    </table>
   )
}

const TableRow=()=>{
    return (
        <>
            <tr>Hi</tr>
            <tr>Hii</tr>
        </>
        
    )
}

const TableData=()=>{
    return (
        <>
             <td>td1</td>
             <td>td2</td>
        </>
       
    )
}

const TableHead=()=>{
    return (
        <th></th>
    )
}