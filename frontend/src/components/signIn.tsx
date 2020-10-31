import React, { Component } from 'react';
import './SignIn.css';
import { signIn } from '../services/authenticationService';
import { AuthenticationModel } from '../models/authenticationModel';

class SignIn extends Component<{}, { email: string, password: string, error: boolean, msgError: string }> {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error : false,
            msgError: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    signInClick = () => {
        signIn(new AuthenticationModel(this.state.email, this.state.password)).then((d) => {
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
        <div className="SignIn">
            <div className="divMain">
                <div className="divLogo">
                    <img src="./logo512.png" width="500px;" height="300px;" alt="" />
                </div>
                <div className="container divContainer">
                    <h2>&nbsp;</h2>
                    <hr />
                    <div className="formLogin">         
                        <form>
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="text" className="form-control" id="email" required name="email" value={this.state.email} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" className="form-control" id="password" required name="password" value={this.state.password} onChange={this.handleInputChange} />
                            </div>
                            <button type="button" className="btn btn-primary btn buttonLogin" onClick={this.signInClick}>Ingresar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default SignIn;