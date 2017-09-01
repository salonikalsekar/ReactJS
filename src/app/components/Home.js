import React from "react";

export class Home extends React.Component{
    constructor(props){
        super();
        this.state={
            age: props.initialAge,
            status: 0,
            homeLink: "Home"
    };
        setTimeout(()=>{
            this.setState({
                status:1
            });
        },3000);
    
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age + 3
        });
      //  console.log(this.age);
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }
    render(){
                var text="Something";
        return(
            <div>
                <p>A new Component</p>
                <p> Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status:{this.state.status}</p>
                <p>User Object => Name: {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i)=><li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                <p>Your name is {this.props.name} and age is {this.props.initialAge}</p>

                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older</button>  \
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>      
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change header link</button>                                                    
            </div>
            
        );
    }

}


//proptypes help to use the type that we want to use. 

Home.propTypes={
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    greet: React.PropTypes.func
};











