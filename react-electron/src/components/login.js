import React, { Component } from "react";


class Login extends Component {
    state = {
        credentials: {username: '', password: ''}
    }
    login = event => {
        console.log(this.state.credentials)
        fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(this.state.credentials)
        }).then(
            data => {
                console.log(data);
            }
        ).catch(error => console.error(error))
    }
    InputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
        
    }
    render() {
        return (
        <div>
            <h1>Login User</h1>
            <br/>
            <label>Username:<input type="text" name="username" value={this.state.credentials.username} onChange={this.InputChanged}/></label>
            <br/>
            <label>Password:<input type="password" name="password" value={this.state.credentials.password}  onChange={this.InputChanged}/></label>
            <br/>
            <button onClick={this.login}> Login </button>
        </div>
        );
    }
}

export default Login;


//http://127.0.0.1:8000/admin/login/?next=/admin/