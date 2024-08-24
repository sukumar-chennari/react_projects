
import CustomList from './Components/list/list.jsx'
import { CustomOrderedList } from './Components/list/list.jsx' // as named export should be writtem in flower braces
import Image from './Components/image/image.jsx'
import { MainHeading,SubHeading } from './Components/heading/headings.jsx'
import { CustomTable } from './Components/table/table.jsx'
import { CustomImage } from './Components/image/image.jsx'
import { CustomButton } from './Components/button/button.jsx'
import data from './data/data.js'
import CustomNav from './Components/bootstrap/bootstrap.jsx'
import CustomCarousel from './Components/bootstrap/carousel.jsx'
import CustomCard from './Components/bootstrap/card.jsx'
import Footer from './Components/bootstrap/footer.jsx'
import YoutubeButon from './Components/class/subscribe.jsx'
//import { CustomButton } from '@Button'
import './App.css'
//git push --set-upstream origin aug-21 

import { Recipe } from './Components/axios/axiosfetch.jsx'
import { FakeStore } from './Components/axios/fakestore.jsx'

import { CustomTableFetch } from './Components/axios/tablefetch.jsx'
const App=()=>{
return (
  // <Recipe></Recipe>
  // <FakeStore></FakeStore>
  <CustomTableFetch></CustomTableFetch>
)
//   <>
// <YoutubeButon></YoutubeButon>
// {/* <CustomButton></CustomButton>  */}

//    <CustomNav></CustomNav>
//   <CustomCarousel></CustomCarousel>
//   <div className='myCard'>
//   <CustomCard data={data}></CustomCard>
//   </div>

//   <Footer></Footer>

  
  
//   </>
}

export default App
