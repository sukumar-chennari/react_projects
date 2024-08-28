
import axios from "axios";
import React, { Component } from "react";
import MyCard from "./card";
import { SquareLoader } from "../loaders/loader";

class DisplayCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: [],
      dataFromChild: '',
      loader: true,
    };
  }

  handleDataFromChild = (data) => {
    const currentItem = this.state.allItems.find(item => item.id === data);
    this.setState({
      dataFromChild: currentItem,
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { data } = await axios.get('https://dummyjson.com/recipes');
    this.setState({
      allItems: data.recipes,
      loader: false,
    });
  };

  render() {
    return (
      <>
        {this.state.loader ? (
          <SquareLoader />
        ) : (
          <div style={{ display: "flex" }}>
            <div style={{ width: '400px' , height:'100vh', overflowY:'scroll'}}>
              {this.state.allItems.map(eachItem => (
                <MyCard
                  data={[eachItem]}
                  text={'Display'}
                  sendDataToParent={this.handleDataFromChild}
                  key={eachItem.id}
                />
              ))}
            </div>

            {this.state.dataFromChild && (
              <div style={{ width: '100%', border: '2px solid red', height:'100vh' }}>
                <MyCard data={[this.state.dataFromChild]} text={'Order'}  width='100%' border='2px solid' margin= '2px' height='500px'  />
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}

export default DisplayCards;


// import axios from "axios";
// import React, {Component} from "react";
// import MyCard from "./card";
// import { SquareLoader } from "../loaders/loader";
// class DisplayCards extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             allItems:[],
//             currentId:'',
//             displayItem:{},
//             loader:true,
//             dataFromChild:''
//         }
//     }

//     handleDataFromChild=(data)=>{
//         const currentItem=this.state.allItems.filter((Item=>Item.id==data))
//         this.setState({
//             dataFromChild:currentItem
//         })
//     }


//     componentDidMount(){
//         this.fetchData()
//     }
//     fetchData=async ()=>{
//         const {data}= await axios.get('https://dummyjson.com/recipes')
//         this.setState(
//             {
//                 allItems:data.recipes,
//                 loader:false
//             })
//             //console.log(this.state.allItems)
//     }
//     render(){
//         return(
//             <>
//                 { (this.state.loader) ? <SquareLoader /> : <>
//                 <div style={{display:"flex"}}>
//                     <div style={{width:'300px'}}>
//                         {this.state.allItems.map(eachItem=>{
//                         return(
//                             <MyCard  data={[eachItem]} text={'Display'} sendDataToParent={this.handleDataFromChild}></MyCard>
//                         )
//                         })}
//                     </div>

//                     {(this.state.dataFromChild !='')?<div style={{width:'100%', border:'2px solid red'}}> 
//                         {
//                             <>
//                                  {console.log(this.state.dataFromChild)}
//                                  <MyCard data={[this.state.dataFromChild]} text={'Order'}></MyCard>
//                             </>
                           
//                         }
//                     </div>}:' '
//                 </div>
                
//                 </> 
                
//                 }
//             </>
            
               
            
//         )
//     }
// }

// export default DisplayCards