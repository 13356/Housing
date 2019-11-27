import React,{Component} from 'react';
import {
  HashRouter,
  Route,
  Link,
} from 'react-router-dom'
import Marst from '../marst/marst';
import Marstwo from '../marstwo/marstwo';
import Punishment from '../punishment/punishment';
import Case from '../case/case';
class Tabsed extends React.Component {
    render(){
     return (

        <div className="userfrom-top">
          <div>
              <div className="userfrom">
                  <div className="userfrom-box"> <Link to="/information/tabsed/marst">marst</Link></div>
                  <div className="userfrom-box"><Link to="/information/tabsed/marstwo">marstwo</Link></div>
                  <div className="userfrom-box"><Link to="/information/tabsed/punishment">Punishment</Link></div>
                  <div className="userfrom-box"><Link to="/information/tabsed/case">Case</Link></div>
              </div>
          </div>
          <div>
              <div>
                  <Route exact path='/information/tabsed' component={Marst} />
                  <Route  path='/information/tabsed/marst' component={Marst} />
                  <Route path='/information/tabsed/marstwo' component={Marstwo} />
                  <Route path='/information/tabsed/punishment' component={Punishment} />
                  <Route path='/information/tabsed/case' component={Case} />
              </div>        
          </div>
          
        </div>
      );
    }

  }


export default Tabsed;
