

//import { CustomButton } from '@Button'
import './App.css'
//git push --set-upstream origin aug-21 

import { Recipe } from './Components/Axios/axiosfetch.jsx'
import { FakeStore } from './Components/Axios/fakestore.jsx'
import DisplayCards  from './Components/displayCards/displaycards.jsx'
const App=()=>{
return (
  <>
    {/* <Recipe></Recipe> */}
    <DisplayCards></DisplayCards>
  </>
  
)
}

export default App
