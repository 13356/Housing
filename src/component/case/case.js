import React,{Component} from 'react';
import {
  HashRouter,
  Route,
  Link,
} from 'react-router-dom'
import "./case.css"
class Case extends React.Component {
    render(){
     return (
         <div className="child">
            <div className="title"> 建设行政执法现场检查笔录</div>
           <table >
              <tbody>
                <tr>
                    <td rowSpan="4"> 当事人 </td>
                    <td rowSpan="2">单位</td>
                    <td >名称</td>
                    <td colSpan="3"><input defaultValue="" /></td>
                    <td >地址</td>
                    <td colSpan="3"><input defaultValue="" /></td>
                </tr>
                <tr>
                    <td colSpan="2">法定代表人</td>
                    <td colSpan="3"><input defaultValue="" /></td>
                    <td>电话</td>
                    <td colSpan="2"><input defaultValue="" /></td>
                </tr>
                 <tr>
                    <td rowSpan="2" >公民</td>
                    <td>姓名</td>
                    <td colSpan="2"><input defaultValue="" /></td>
                    <td>性别</td>
                    <td><input defaultValue="" /></td>
                    <td>电话</td>
                    <td colSpan="2"><input defaultValue="" /></td>
                </tr>
                <tr>
                    <td>住址</td>
                    <td colSpan="4"><input defaultValue="" /></td>
                    <td>身份证号码</td>
                    <td colSpan="2"><input defaultValue="" /></td>
                </tr>
               <tr>
                     <td className="case">案情摘要</td>
                     <td className="case" colSpan="9"><textarea defaultValue="" ></textarea></td>
               </tr>

               <tr>
                     <td className="case">处罚决定及执行情况</td>
                     <td className="case" colSpan="9"><textarea defaultValue="" ></textarea></td>
               </tr>
               <tr>
                     <td className="case">执法人员意见</td>
                     <td className="case" colSpan="9">
                        <div className="punish-pre punish-pre-mint case-min">执法人员签名:<input className="punish-int5"/><input className="punish-int5"/></div>
                        <div className="case-minr"> <input className="punish-pre-ent"/>年<input/>月<input/>日</div>
                     </td>
               </tr>
                <tr>
                     <td className="case">执法机构意见</td>
                     <td className="case" colSpan="9">
                        <div className="punish-pre punish-pre-mint case-min">负责人:<input className="case-mp"/></div>
                        <div className="case-minr"> <input className="punish-pre-ent"/>年<input/>月<input/>日</div>
                     </td>
               </tr>
               <tr>
                     <td className="case">法制机构意见</td>
                     <td className="case" colSpan="9">
                        <div className="punish-pre punish-pre-mint case-min">负责人:<input className="case-mp"/></div>
                        <div className="case-minr"> <input className="punish-pre-ent"/>年<input/>月<input/>日</div>
                     </td>
               </tr>
               <tr>
                     <td className="case">行政机关审批意见</td>
                     <td className="case" colSpan="9">
                        <div className="punish-pre punish-pre-mint case-min">负责人:<input className="case-mp"/></div>
                        <div className="case-minr"> <input className="punish-pre-ent"/>年<input/>月<input/>日</div>
                     </td>
               </tr>
               
              </tbody>  
           </table>
           <div className="case-name">（<div className="case-con" contentEditable="true" >行政处罚机关名称</div>）</div>  
        </div>
      );

    }

  }


export default Case;
