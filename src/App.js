import React,{Component} from 'react';
import Main from './component/main/main';
import Login from './component/login/login';
import './App.css';
import {
  HashRouter,
  Route,
  Link,
} from 'react-router-dom'

class App extends React.Component {
    render(){
     return (
      <HashRouter>
        
        <Main/>
      </HashRouter>
      );

    }

  }


export default App;
