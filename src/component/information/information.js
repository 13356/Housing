import React,{Component} from 'react';
import {
  HashRouter,
  Route,
  Link,
} from 'react-router-dom'
import './information.css';
import Chidrou from '../chidrou/chidrou';
import Childrouter from '../childrouter/childrouter';
class Information extends React.Component {
    render(){
     return (
        <div className="App">
            <div className="App">
                11223w
                66666             
            </div>
            <div className="App">
                11223  
            </div>
            <div>
                <Link to="/information/chidrou">Chidrou</Link><br/>
                <Link to="/information/childrouter">Chidrouter</Link>
            </div>
            <div>
                 <Route path='/information/chidrou' component={Chidrou} />
                 <Route path='/information/childrouter' component={Childrouter} />
            </div>
           
        </div>
      );

    }

  }


export default Information;
