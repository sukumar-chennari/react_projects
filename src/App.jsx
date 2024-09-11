
import './App.css' 
import { FilterMemo } from './Components/hooks/useMemo/filterMemo'
import { AgeCalculator } from './Components/hooks/useMemo/useMemo'
import { MilkCalculator } from './Components/hooks/useMemo/useMemoMilk'

const App=()=>{
return (
  <>
   <MilkCalculator/>
   <AgeCalculator/>
   <FilterMemo/>
  </>
  
)
}

export default App
