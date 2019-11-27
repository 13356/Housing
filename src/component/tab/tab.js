import React,{Component} from 'react';
import {
  HashRouter,
  Route,
  Link,
} from 'react-router-dom'
import Chidrou from '../chidrou/chidrou';
import Childrouter from '../childrouter/childrouter';
import "./tab.css"
class Tab extends React.Component {
    render(){
     return (
        <div className="userfrom-top">
          <div>
              <div className="userfrom">
                  <div className="userfrom-box"><Link to="/information/tab/chidrou">Chidrou</Link></div>
                  <div className="userfrom-box"><Link to="/information/tab/childrouter">Chidrouter</Link></div>
                  <div className="userfrom-box"><Link to="/information/tab/childrouter">Chidrouter</Link></div>
                  <div className="userfrom-box"><Link to="/information/tab/childrouter">Chidrouter</Link></div>
                  <div className="userfrom-box"><Link to="/information/tab/childrouter">Chidrouter</Link></div>
                  <div className="userfrom-box"><Link to="/information/tab/childrouter">Chidrouter</Link></div>
                  <div className="userfrom-box"><Link to="/information/tab/childrouter">Chidrouter</Link></div>
              </div>
          </div>
          <div>
              <div>
                  <Route exact path='/information/tab' component={Chidrou} />
                  <Route exact path='/information' component={Chidrou} />
                  <Route  path='/information/tab/chidrou' component={Chidrou} />
                  <Route  path='/information/tab/childrouter' component={Childrouter} />
              </div>        
          </div>
          
        </div>
      );
    }

  }


export default Tab;
