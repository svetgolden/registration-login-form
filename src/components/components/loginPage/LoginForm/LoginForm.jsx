import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction } from '../../../actions/loginForm.js';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from '../../AppStyles.js'

@connect((appState)=>({
	login: appState.loginForm.login,
	isFetching: appState.loginForm.isFetching,
  isLoginSuccess: appState.loginForm.isLoginSuccess,
  isSubmit: appState.loginForm.isSubmit
    }), (dispatch)=> bindActionCreators({loginAction}, dispatch) 
)
export default class LoginForm extends Component {
static propTypes = {
	login: PropTypes.string,
	isFetching: PropTypes.bool,
	loginAction: PropTypes.func.isRequired,
  isLoginSuccess: PropTypes.bool,
  isSubmit: PropTypes.bool
}

constructor(props){
super(props)
 this.loginInput = null;
 this.passwordInput = null;

}

handleSubmit = (event) => {
 event.preventDefault();
  if(this.loginInput && this.passwordInput){
   this.props.loginAction(this.loginInput.value, this.passwordInput.value) 
  }  
  };

  renderStatus(){
    if(this.props.isFetching) {
      return (<span>please wait...</span>)
    }

    if(!this.props.isLoginSuccess && this.props.isSubmit)   {
      return(<span style={{color: "FF0000"}}>wrong username or password</span>)
    }  


      return null;
  }

render(){
	return (
		<div>
		  <form onSubmit={this.handleSubmit} style={{padding: 15}}>
        <label>
          Name:
          <input 
          	type="text" 
          	name='login' 
          	defaultValue={this.props.login} 
          	ref={(el)=>this.loginInput = el} className = {css(styles.input)}/>
        </label><br/>
        <label>
          Password:
          <input 
            type="text" 
            name='password' 
            ref={(el)=>this.passwordInput = el} className = {css(styles.input)}/>
        </label> <br/>
         
        <input type="submit" value="login" className = {css(styles.button)}/>
      </form>
      <div >{this.renderStatus()}</div>

		</div>
	);
}
};

 