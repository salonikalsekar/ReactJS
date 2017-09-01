import React from "react";
import{ render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

//render method is called by reactjs whenever it thinks to render a component and then we define what to do after rendering 
class App extends React.Component{

    constructor(){
        super();
        this.state={
            homeLink: "Home"
        };
    }
    onGreet(){
        alert("Hello-parentchild");
    }

    onChangeLinkName(newName){
        this.setState({
        homeLink: newName
        });
    }
 
    render(){
        var user={
         name: "Akanksha",
         hobbies:["sports","swimming"]
        };
        return(
            <div className="container">
                <div className='row'>
                   <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink="this.state.homeLink"/>
                    </div>
                </div>
                <p>Hello :p</p>
                <div className='row'>
                   <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Saloni"} 
                        initialAge={22} 
                        user={user} 
                        greet={this.onGreet}
                        changeLink={this.onChangeLinkName.bind(this)}>
                            <p>Hello world!</p>
                        </Home>
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));