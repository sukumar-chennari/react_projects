import { useRef, useState } from "react";
import { buttons } from "../jshelpers";

export const RefHook = () => {
  const ref = useRef(0);
  const [count,setCount]=useState(0)
  const handlerRef=()=>{
    ref.current+=1
    console.log(ref.current)
    setCount(count+1)
    
  }
  return <>
    
    <button onClick={handlerRef}>{`see render ${ref.current} `}</button>
    <button onClick={handlerRef}>{`see render ${count} `}</button>
  </>;
};
