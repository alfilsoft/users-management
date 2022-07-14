
import React, { useState } from "react";

class Form extends React.Component{
    state={userName:'',password:''};
    
    handleSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state.userName);
        console.log(this.state.password)
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                 <section>
                    <label>Username</label>
                    <input onChange={event => this.setState({userName:event.target.value})} 
                    value={this.state.userName} type="text" placeholder="username" required/>
                 </section>
                <section>
                    <label>password</label>
                    <input onChange={event => this.setState({password:event.target.value})} 
                    value={this.state.password} type="text" placeholder="password" required/>
                </section>
                <button>Sign in</button>
            </form>
        );
    }
}

function LogIn(){
    return (
        <div>
            <h1>
                Log In
            </h1>     
            <Form />
        </div>
    );
}

export default LogIn;