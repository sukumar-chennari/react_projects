
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css' 
import { TodoForm } from './Components/crudFrom/todoForm'
import { CompletedTasks } from './Components/crudFrom/completedTask'
import { NavigatorStack } from './Components/navigator/navigator-stack'


const App=()=>{
return (
  <>
   <NavigatorStack/>

  </>
  
)
}

export default App
