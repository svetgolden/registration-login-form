import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registrationAction } from '../../../actions/registrationForm.js';
import PropTypes from 'prop-types';

@connect((appState)=>({
  isRegistrationSuccess: appState.registrationForm.isRegistrationSuccess,
  isSubmit: appState.registrationForm.isSubmit
    }), (dispatch)=> bindActionCreators({registrationAction}, dispatch) 
)

export default class RegistrationForm extends Component {constructor(props) {
  	constructor(props){
    super(props)
    this.state = {login: '',
                 password: '',
                 passwordCopy: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

handleSubmit(event) {
  if(this.state.login && this.state.password && this.state.passwordCopy){
     if (!(this.state.password === this.state.passwordCopy)){
    getElementById('textError').innerHTML = 'error in password'
  }
    else{
       dispatch(registrationAction.register(user));
    }
  }
 
   
    event.preventDefault();
  }

render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name='login' value={this.state.login} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="text" name='password' value={this.state.password} onChange={this.handleChange} />
        </label>
         <label>
          Password:
          <input type="text" name='passwordCopy' value={this.state.passwordCopy} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div id="textError"></div>
     </div>
    );
  }
};