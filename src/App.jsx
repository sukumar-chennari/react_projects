
import CustomList from './Components/list/list.jsx'
import { CustomOrderedList } from './Components/list/list.jsx' // as named export should be writtem in flower braces
import Image from './Components/image/image.jsx'
import { MainHeading,SubHeading } from './Components/heading/headings.jsx'
import { CustomTable } from './Components/table/table.jsx'
import { CustomImage } from './Components/image/image.jsx'
//import { CustomButton } from './Components/button/button.jsx'
import data from './data/data.js'
import CustomNav from './Components/bootstrap/bootstrap.jsx'
import CustomCarousel from './Components/bootstrap/carousel.jsx'
import CustomCard from './Components/bootstrap/card.jsx'
import Footer from './Components/bootstrap/footer.jsx'
import YoutubeButon from './Components/class/subscribe.jsx'
import { CustomButton } from '@Button'
import './App.css'
//git push --set-upstream origin aug-21 

const App=()=>{
return (
  <>
<YoutubeButon></YoutubeButon>
{/* <CustomButton></CustomButton> */}

  {/* <CustomNav></CustomNav>
  <CustomCarousel></CustomCarousel>
  <div className='myCard'>
  <CustomCard></CustomCard>
  </div>

  <Footer></Footer> */}

  
  
  </>

)
  // const arr=[
  //   {
  //     "source":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     "alternateText":'bag',
  //     "width":100,
  //     "height":200
  //   },
  //   {
  //     "source":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     "alternateText":'bag',
  //     "width":100,
  //     "height":200
  //   },
  //   {
  //     "source":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     "alternateText":'bag',
  //     "width":200,
  //     "height":200
  //   },
  //   {
  //     "source":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     "alternateText":'bag',
  //     "width":100,
  //     "height":200
  //   }
  // ]
  // return (
  //   <div>
  //     {/* <MainHeading></MainHeading>
  //     <h1>Hello World</h1>
  //     <CustomList></CustomList>
  //     <CustomOrderedList></CustomOrderedList>
  //     <Image></Image>
  //     <SubHeading/>
  //     <CustomTable></CustomTable> */}
  //     {
  //     arr.map(eachItem=>{
  //       return <Image1 source={eachItem.source} alternateText={eachItem.alternateText} height={eachItem.height} width={eachItem.width}/>
  //     })
  //     }

  //     <CustomButton text='login' onPress={()=>{}} bgColor='yellow'></CustomButton>
  //     <CustomButton text='submit' onPress={()=>{}} ></CustomButton>
  //   </div>
  // )
}

export default App
