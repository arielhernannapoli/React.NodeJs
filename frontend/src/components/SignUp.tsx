import React from 'react';
import { RouteComponentProps } from 'react-router';
import { signUp } from '../services/authenticationService';
import { RegisterModel } from '../models/registerModel';

export class SignUp extends React.Component<RouteComponentProps<{}>, { name: string, email: string, password: string, error: boolean, msgError: string }> {
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        email: '',
        password: '',
        error : false,
        msgError: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
}

signUpClick = () => {
    signUp(new RegisterModel(this.state.name, this.state.email, this.state.password)).then((d) => {
        if(d.errors !== undefined) {
            alert(d.errors.message);
        }
    }).catch((e) => {
        console.log(e);
    })
};

handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const state = {};
    state[name] = value;

    this.setState(state);
}

render() {
return (
    <div className="SignUp">
        <div className="divMain">
            <div className="container">
                <h2>Registrarme como usuario</h2>
                <hr/>
                <div className="formLogin">         
                    <form>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" className="form-control" id="name" required name="name" value={this.state.name} onChange={this.handleInputChange} />
                        </div>                      
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="text" className="form-control" id="email" required name="email" value={this.state.email} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" className="form-control" id="password" required name="password" value={this.state.password} onChange={this.handleInputChange} />
                        </div>
                        <button type="button" className="btn btn-primary btn buttonLogin" onClick={this.signUpClick}>Registrarme</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);
}
}