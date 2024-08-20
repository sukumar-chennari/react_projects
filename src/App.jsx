
import CustomList from './Components/list/list.jsx'
import { CustomOrderedList } from './Components/list/list.jsx' // as named export should be writtem in flower braces
import Image from './Components/image/image.jsx'
import { MainHeading,SubHeading } from './Components/heading/headings.jsx'
import { CustomTable } from './Components/table/table.jsx'
import { CustomImage } from './Components/image/image.jsx'
import { CustomButton } from './Components/button/button.jsx'
import data from './data/data.js'

const App=()=>{
return (
 < >
    {
      data.map( (eachItem,id)=>{
        return(
          <div key={id}>
            <MainHeading heading={eachItem.name} />
            <CustomImage source={eachItem.image} ></CustomImage>
            <SubHeading heading="Ingredients"></SubHeading>
            <CustomList list={eachItem.ingredients}></CustomList>

            <SubHeading heading="Instructions"></SubHeading>
            <CustomList list={eachItem.instructions}></CustomList>
            <CustomButton text='Start Preparation ' bgColor='yellow'></CustomButton>

          </div>
        )
      })
    }
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
