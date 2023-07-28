import { Component } from "react";

class HelloDACComponent extends Component{
    

    componentDidMount(){
        console.log("In Component DID mount ")
        // code to extract data from server!!!
    }

    constructor(props){
        super(props)
        this.   state={
            name:"Shrilata",
            books: this.props.books
        }
    
    }

    render() {
        return <h1>Hello Class Component!! {this.state.name} email:{this.state.email}</h1>
    }

}

export default HelloDACComponent;
