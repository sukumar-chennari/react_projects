import {RotatingSquare  } from 'react-loader-spinner'
const SquareLoader= (props)=>{
    return (
        <RotatingSquare
            
            ariaLabel="rotating-square-loading"
            wrapperStyle={{}}
            wrapperClass=""
            {...props}
        />
    )
}

export {SquareLoader}