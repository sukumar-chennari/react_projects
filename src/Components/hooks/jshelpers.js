export const CreateTodoList=()=>{
    const list=[]
    for(let i=1;i<=10;i++){
       const obj={
        'id':i,
        text: `Item:${i}`
       }
    list.push(obj)
    }
    
    return list
}

export const buttons=()=>{
    const nums=[]
    for(let i=1;i<=100;i++){
        nums.push(i)
    }
    return nums
}