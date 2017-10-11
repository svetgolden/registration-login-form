import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registrationAction } from '../../../actions/registrationForm.js';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from '../../AppStyles.js'

@connect((appState)=>({
  isRegistrationSuccess: appState.registrationForm.isSuccess,
  isSubmit: appState.registrationForm.isSubmit,
  isFetching: appState.registrationForm.isFetching
    }), (dispatch)=> bindActionCreators({registrationAction}, dispatch) 
)

export default class RegistrationForm extends Component {
  	constructor(props){
    super(props)
    this.state = {login: '',
                 password: '',
                 passwordCopy: '',
                 isPassWrong: false
               };

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
handleSubmit = (event) => {
 event.preventDefault();
  if(this.state.login && this.state.password && this.state.passwordCopy){
    if (!(this.state.password === this.state.passwordCopy))
    this.setState({
      isPassWrong: true
    })
  
    else{
       this.props.registrationAction(this.state.login, this.state.password)
       this.setState({
         isPassWrong: false
       })
    }
  }  
  };

  renderPassChecking(){
    if (this.state.isPassWrong)
      return (<span style={{color: "#FF0000"}}>Password wrong</span>);
    return null;
  };

  renderResult(){
    if (this.props.isSubmit && !this.props.isFetching){
      if (this.props.isRegistrationSuccess)
          return (<span style={{color: "#008000"}}> You are registered!!!</span>)
      else return (<span style={{color: "#FF0000"}}> Registration error</span>)
    }
    return null;

  }

render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit} style={{padding: 15}}>
        <label>
          Name:
          <input type="text" name='login' value={this.state.login} onChange={this.handleChange} className = {css(styles.input)}/>
        </label><br/>
        <label>
          Password:
          <input type="text" name='password' value={this.state.password} onChange={this.handleChange} className = {css(styles.input)}/>
        </label><br/>
         <label>
          Confirm password:
          <input type="text" name='passwordCopy' value={this.state.passwordCopy} onChange={this.handleChange} className = {css(styles.input)}/>
        </label><br/>
        <input type="submit" value="SUBMIT" className = {css(styles.button)}/>
      </form>
      <div>{this.renderPassChecking()}</div>
      <div>{this.renderResult()}</div>
     </div>
    );
  }
};