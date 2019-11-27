import React,{Component} from 'react';
import {
  HashRouter,
  Route,
  Link,
} from 'react-router-dom'
import "./punishment.css"

class Punishment extends React.Component {
    render(){
     return (
        <div className="child">
            <div className="title">当场处罚决定书</div>
            <div className="title-box">
                <div className="punish-title">
                    （ <input/> ）简罚字（ <input/>  ）第（ <input/>  ）号
                </div>
                <div className="punish-pre">
                    当事人:<input className="punish-int"/>单位:<input className="punish-int"/>
                </div>
                <div className="punish-pre">
                    法定代表人:<input className="punish-int2"/>地址:<input className="punish-int"/>
                </div>
                <div className="punish-abo">当事人因</div>
                <div className="punish-con" contentEditable="true"></div>
                <div className="punish-cont">已违反<div  contentEditable="true" suppressContentEditableWarning  className="punish-cont-font">（《×××法》第×条第×款第×项等）</div>的规定。</div>
                <div className="punish-cont">根据<div  contentEditable="true" suppressContentEditableWarning  className="punish-cont-font1">（《×××法》第×条第×款第×项等）</div>的规定。决定</div>
                <div className="punish-cont">给予你(单位)<div  contentEditable="true" suppressContentEditableWarning  className="punish-cont-font2"></div>的行政处罚。</div>
                <div className="punish-cont2 punish-cont">履行方式:<div  contentEditable="true" suppressContentEditableWarning  className="punish-cont-font3"></div></div>
                <div className="punish-cont2 punish-cont3 punish-cont">如不服本处罚决定,可以自接到本处罚决定之日起 <div className="punish-data-re">60</div>日内向<div contentEditable="true" suppressContentEditableWarning className="punish-xian"></div>或<div contentEditable="true" suppressContentEditableWarning className="punish-xian"></div>申请行政复议,或在 <div className="punish-data-re">3</div>个   月内直接向<div contentEditable="true" suppressContentEditableWarning className="punish-xian"></div>人民法院起诉。逾期不申请行政复议或不向人民法院起诉又不履行本处罚决定的，本机关有权申请人民法院强制执行。</div>
                <div className="punish-pre">
                    处罚地点：<input className="punish-int3"/>时间:<input className="punish-int"/>
                </div>
                <div className="punish-pre punish-pre-mint">执法人员签名:<input className="punish-int5"/><input className="punish-int5"/></div>
                <div className="punish-title">
                    行政执法机关印章
                </div>
                <div className="punish-pre-mintre punish-title">
                    <input className="punish-pre-ent"/>年<input/>月<input/>日
                </div>
                
            </div>
        </div>
      );

    }

  }


export default Punishment;
