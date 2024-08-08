import React, { Component } from "react";
//example of state or useState
class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor',
            number: 1,
        }
    }

    changeMessage(){
        this.setState({ message: 'Thank you for subscribing' })
    }

    incrementNumber(){
        // this.setState({
        //     number: this.state.number + 1
        // },()=>{
        //     console.log('on click number change>>',this.state.number);  //the code has to be executed after the setState and we have to put that in second argument to the setState method.
        // })

        this.setState(previousState=>({  //the function has access to previous state which can be use to calculate new state.
            number:previousState.number + 1
        }))
        console.log(this.state.number);
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                    {this.state.number}
                </h1>
                <button  onClick={()=>this.changeMessage()}>
                    Subscribe
                </button>
                <button onClick={()=> this.incrementNumber()}>
                    Click This
                </button>
            </div>
        )


    }
}

export default Message; 