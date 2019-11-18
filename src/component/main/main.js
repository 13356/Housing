import React,{Component} from 'react';
import Nav from '../nav/nav';
import Login from '../login/login';
import Information from '../information/information';

import {
  HashRouter,
  Route,
  Link,
} from 'react-router-dom'

class Main extends React.Component {
    render(){
     return (
        <div className="App">
           <Route path='/' exact component={Login} />
           <Route path='/information' component={Information} />
           <Route path='/nav' component={Nav} />
          
        </div>
      );

    }

  }


export default Main;
