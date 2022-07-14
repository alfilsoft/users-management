
import React, { useState } from "react";
import { Component } from "react";
import { AbstractFilter } from './';


function Button(){
    const [counter,setCounter] = useState(0);
    return (
        <button onClick={()=>setCounter(counter+1)}>
            {counter}
        </button>
    );
}

function ButtonTest(props){
    return (
        <button onClick={props.onClickFuntion}>
            LogConsole
        </button>
    );
}

function Input(props){
    //const [test,setTest] = useState("");
    //const changeHander = ev => setTest({test:ev.target.value}); 
    return (
        <div>
             <label for="name">
                <span>¿What´s your name?</span>
                <input  onChange= {props.onChangeFunction}></input>
            </label> 
        </div>

    );
}

function DisplayLog(props){
    return (
        <div>
            {props.message}
        </div>
    );
}

function AppTest(){
    const [test,setTest] = useState("");
    const [password,setPassword] = useState("")
    //const [counter,setCounter] = useState(0);
    const changeHander = ev =>  setTest(ev.target.value);
    const changePassword = ev => setPassword(ev.target.value);
    //const incrementCount = () => setCounter(counter+1)
    const logTest = () => {console.log({test});console.log({password});};
    //const logPassword = () => {console.log({password})}
    //<ButtonTest onClickFuntion={logPassword}/>
    return(
        <div>
            <Input onChangeFunction={changeHander} required />
            <Input onChangeFunction={changePassword} required/>
            
            <ButtonTest onClickFuntion={logTest} />
            
            <DisplayLog message={test}/>
            <DisplayLog message={password}/>
        </div>
    );
}



function AppTest2(){
    const [userName,setUserName] = useState("");
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log({userName});
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={userName}
            onChange = {ev => setUserName(ev.target.value)}
            placeholder="Type the user name"
            required
            />
            <button>Sing in</button>
        </form>
    );
} 

class Form2 extends React.Component{
    state={name:'',password:''};
    
    handleSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state.name);
        console.log(this.state.password)
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={event => this.setState({name:event.target.value})} 
                value={this.state.name} type="text" placeholder="GitHub username" required/>

                <input onChange={event => this.setState({password:event.target.value})} 
                value={this.state.password} type="text" placeholder="GitHub password" required/>
                
                <button>Sign in</button>
            </form>
        );
    }
}


function Util(){

    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");

    const handleUser = event => setUser(event.target.value);
    return (
        <div>
            <h1>
                Login Call
            </h1>

            <AppTest />
            
            <Form2 />
        </div>
    );
}

export default Util;