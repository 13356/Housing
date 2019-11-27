import React,{Component} from 'react';
import {
  Route,
  Link,
} from 'react-router-dom'
import './information.css';
import Chidrou from '../chidrou/chidrou';
import Childrouter from '../childrouter/childrouter';
import Tab from '../tab/tab';
import Tabsed from '../tabsed/tabsed';
import './information.css';
class Information extends Component {
    render(){
     return (
        <div className="App">
          <div className="nav">
                <div className="department"> <Link to='/information/tab'>用户</Link></div>
                <div className="department"> <Link to='/information/tabsed'>部门</Link>  </div>
                <div className="department"> <Link to='/information/tabsed'>报表</Link>  </div>
                <div className="department"> <Link to='/information/tabsed'>退出</Link>  </div>
           </div>
            <div>
              <Route exact  path='/information' component={Tab} />
              <Route  path='/information/tab' component={Tab} />
              <Route  path='/information/tabsed' component={Tabsed} />
            </div>
        </div>
      );

    }

  }


export default Information;