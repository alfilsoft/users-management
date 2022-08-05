import React, { useState } from "react";

const data=[
    {id:1,nombre:"anthony", password:"123456"},
    {id:1,nombre:"jesus", password:"123456"},
    {id:1,nombre:"daniela", password:"123456"},

];

class Createuser extends React.Component{
    state={userName:'',password:'',data:data}
    
    
    handleSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state.userName);
        console.log(this.state.password)
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                 <section>
                  <label>Id</label>
                    <input  
                    value={this.state.data.length+1} type="text" placeholder="username" required/>
                    
                    <label>Username</label>
                    <input onChange={event => this.setState({userName:event.target.value})} 
                    value={this.state.userName} type="text" placeholder="username" required/>
                 </section>
                <section>
                    <label>password</label>
                    <input onChange={event => this.setState({password:event.target.value})} 
                    value={this.state.password} type="text" placeholder="password" required/>
                </section>
                <button>Create</button>

                <table>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>User</th>
                        <th>password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((elemento)=>(
                            <tr>
                                <td>{elemento.id}</td>
                                <td>{elemento.nombre}</td>
                                <td>{elemento.password}</td>
                                <td>{<button>Update</button>}</td>
                                <td>{<button>Delete</button>}</td>

                            </tr>

                                ))}
                        
                    </tbody>
                </table>
            </form>

            
        );
    }
}

function Create(){
    return (
        <div>
            <h1>
                Create User
            </h1>     
            <Createuser />
        </div>
    );
}

export default Create;