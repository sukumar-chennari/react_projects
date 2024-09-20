
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css' 
import { TodoForm } from './Components/crudFrom/todoForm'
import { CompletedTasks } from './Components/crudFrom/completedTask'


const App=()=>{
return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoForm />} />
        <Route path="/completed" element={<CompletedTasks />} />
      </Routes>
    </BrowserRouter>

  </>
  
)
}

export default App
