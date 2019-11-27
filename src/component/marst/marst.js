import React,{Component} from 'react';
import {
  HashRouter,
  Route,
  Link,
} from 'react-router-dom'
import "./marst.css"
class Marst extends React.Component {
    render(){
     return (
        <div className="child">
            <div className="title">立卷、验卷情况记载</div>
            <div className="record-top">
                  <div className="record-data">
                      本案卷于<input className="year" />年<input/>月<input/>日立卷
                  </div>
                  <div className="record-data">
                      本册连面带底共计<input/>页
                  </div>
                  <div className="record-data">
                      附证物袋，内装<input/>件
                  </div>
                  <div className="record-data-pre">
                      立卷人<input className="record-perpor"/>
                  </div>
            </div>
            <div className="record-bo"> 
                  <div className="record-datao">本案卷于<input className="year" />年<input/>月<input/>经检验合格</div>
                  <div className="record-data-pre">
                      检验人<input className="record-perpor"/>
                  </div>
            </div>
        </div>
      );

    }

  }


export default Marst;
