import React from 'react';
import App from './App';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.jsx';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './components/loginPage/LoginPage.jsx';
import RegistrationPage from './components/registrationPage/RegistrationPage.jsx';



const store = configureStore ();

ReactDom.render(
  <Provider store = {store}>
    <Router>
       <Switch>
       <Route exact path ='/' component = {LoginPage} />
       <Route exact path ='/register' component = {RegistrationPage} />
       <Route exact path ='/login' component = {LoginPage} />
       </Switch>
    </Router>
  </Provider>,document.getElementById('content')
)