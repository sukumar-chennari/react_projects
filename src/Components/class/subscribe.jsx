import {Component} from 'react'
import './subscribe.css' 
class YoutubeButon extends Component{
    state={
        "isSubscribed":false,
        "text1":'subscribe',
        "text2":'subscribed',
        "count":0
    }

     myClick=()=>{
        this.setState({
            isSubscribed:!this.state.isSubscribed
        })
    }

    increment=()=>{
        this.setState({
           count: this.state.count+1
        })
    }


    decrement=()=>{
        this.setState({
           count: this.state.count-1
        })
    }

    reset=()=>{
        this.setState({
           count: 0
        })
    }

    
    render(){
        return(
            <>
                <h1 className='h1'>Hello class component </h1>
                <h2>{this.state.count}</h2>
                <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.decrement}>Decrement</button>
                
                </div>
                
                <button onClick={this.myClick}  className={this.state.isSubscribed?'Youtube':'notYoutube'}> {this.state.isSubscribed?this.state.text2:this.state.text1}</button>
            </>
        )
    }
}

export  default YoutubeButon