import axios from 'axios';
import { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { SquareLoader } from '../loaders/loader';
import { SubHeading } from '../heading/headings';
import CustomList from '../list/list';

export class Recipe extends Component {
    state = {
        loading: true,
        recipes: [],
        expandedItems: {}  // Track which items are expanded
    }

    componentDidMount() {
        this.fetchData();
    }

    changeHeight = (id) => {
        this.setState(prevState => ({
            expandedItems: {
                ...prevState.expandedItems,
                [id]: !prevState.expandedItems[id]
            }
        }));
    }

    fetchData = async () => {
        try {
            const { status, data } = await axios.get("https://dummyjson.com/recipes");
            if (status === 200) {
                this.setState({
                    recipes: data.recipes,
                    loading: false
                });
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    render() {
        const { loading, recipes, expandedItems } = this.state;

        return (
            <>
                {loading ? <SquareLoader /> : (
                    <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: "space-evenly" }}>
                        {recipes.map(eachItem => {
                            const isExpanded = expandedItems[eachItem.id] || false;

                            return (
                                <Card 
                                    style={{ 
                                        width: '18rem', 
                                        margin: '5px', 
                                        height: isExpanded ? 'max-content' : '800px', 
                                        overflow: 'hidden',
                                        position: 'relative' 
                                    }} 
                                    key={eachItem.id}
                                >
                                    <Card.Img variant="top" src={eachItem.image} />
                                    <Card.Body>
                                        <Card.Title>{eachItem.name}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </Card.Text>
                                        <SubHeading heading='Instructions' />
                                        <CustomList list={eachItem.instructions} />

                                        <SubHeading heading='Ingredients' />
                                        <CustomList list={eachItem.ingredients} />

                                        <Button variant="primary" style={{marginBottom:'25px'}}>Prepare</Button>
                                    </Card.Body>

                                    <Button 
                                        onClick={() => this.changeHeight(eachItem.id)} 
                                        style={{ 
                                            position: 'absolute', 
                                            bottom: '0', 
                                            width: '100%' 
                                        }}
                                    >
                                        {isExpanded ? 'Show less' : 'Show more'}
                                    </Button>
                                </Card>
                            );
                        })}
                    </div>
                )}
            </>
        );
    }
}



// import axios from 'axios'
// import { Component } from 'react'

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// import { SquareLoader } from '../loaders/loader'
//  import { SubHeading } from '../heading/headings';
// import CustomList from '../list/list';

// export class Recipe extends Component{
//     state={
//         loading:true,
//         recipes:[],
//         divHeight:'short',
//         expandeditems:{}
//     }

//     componentDidMount(){
//         this.fetchData()
//     }


//     changeHeight = (id) => {
//         this.setState(prevState => ({
//             expandedItems: {
//                 ...prevState.expandedItems,
//                 [id]: !prevState.expandedItems[id]
//             }
//         }));
//     }

//     // changeHeight=(id)=>{
//     //     this.state.recipes.map( eachItem=>{
//     //         if(eachItem.id==id){
//     //             this.setState({
//     //                 divHeight: (this.state.divHeight=='short')?'notShort':'short'
//     //             })
//     //         }
//     //     })
       
//     // }

//     fetchData=async ()=>{
//         const {status,data}=await axios.get("https://dummyjson.com/recipes")
//         console.log(data.recipes)
//         if( status==200){
//             this.setState({
//                 recipes:data.recipes,
//                 loading:false
//             })
//         }
//     }

//     render(){
//         return(

//             <>
//             {
//                 this.state.loading?<SquareLoader></SquareLoader>:<>
//                 <div style={{display:'flex' , width:'100%' , flexWrap:'wrap', justifyContent:"space-evenly"}}>

//                 {
//                     this.state.recipes.map( eachItem=>{
                        
//                         return (
//                             <Card style={{ width: '18rem', margin:'5px', height:(this.state.divHeight==='short')?'600px':'max-content' , overflow:'hidden'}} key={eachItem.id}>
//                             <Card.Img variant="top" src={eachItem.image} />
//                             <Card.Body>
//                               <Card.Title>{eachItem.name}</Card.Title>
//                               <Card.Text>
//                                 Some quick example text to build on the card title and make up the
//                                 bulk of the card's content.
//                               </Card.Text>
//                               <SubHeading heading='Instructions'></SubHeading>
//                               <CustomList list={eachItem.instructions}></CustomList>

//                               <SubHeading heading='Ingredients'></SubHeading>
//                               <CustomList list={eachItem.ingredients}></CustomList>

//                               <Button variant="primary">Prepare</Button>
//                             </Card.Body>

//                             <Button 
//                                         onClick={() => this.changeHeight(eachItem.id)} 
//                                         style={{ 
//                                             position: 'absolute', 
//                                             bottom: '0', 
//                                             width: '100%' 
//                                         }}
//                                     >
//                                         {isExpanded ? 'Show less' : 'Show more'}
//                                     </Button>
                            
//                           </Card>
//                         )
//                     })
//                 }
//                 </div>
              
//                 </>
//     }
//             </>
//         )
//     }
// }