import React,{Component} from 'react';
import {
  HashRouter,
  Route,
  Link,
} from 'react-router-dom'
import "./childrouter.css"
class Childrouter extends React.Component {
    render(){
     return (
         <div className="child">
            <div className="title"> 建设行政执法现场检查笔录</div>
           <table >
                <tr>
                    <td rowspan="4"> 当事人 </td>
                    <td rowspan="2">单位</td>
                    <td >名称</td>
                    <td colspan="3"><input defaultValue="" /></td>
                    <td >地址</td>
                    <td colspan="3"><input defaultValue="" /></td>
                </tr>
                <tr>
                    <td colspan="2">法定代表人</td>
                    <td colspan="3"><input defaultValue="" /></td>
                    <td>电话</td>
                    <td colspan="2"><input defaultValue="" /></td>
                </tr>
                 <tr>
                    <td rowspan="2" >公民</td>
                    <td>姓名</td>
                    <td colspan="2"><input defaultValue="" /></td>
                    <td>性别</td>
                    <td><input defaultValue="" /></td>
                    <td>电话</td>
                    <td colspan="2"><input defaultValue="" /></td>
                </tr>
                <tr>
                    <td>住址</td>
                    <td colspan="4"><input defaultValue="" /></td>
                    <td>身份证号码</td>
                    <td colspan="2"><input defaultValue="" /></td>
                </tr>
                <tr>
                     <td colspan="9" rowspan="2">案情摘要</td>
                     <td colspan="7" rowspan="2"><input defaultValue="" /></td> 
                </tr>
                
           </table>
           <div className="sign">
                <div className="signl">被检查单位(人)签章(签名):<input /></div>
                <div className="signr">执法人员签名:<input/></div>
                <div className="signc"></div>
           </div>
           <div className="sibot">
                注:如记录栏内填写不下，可使用续页.
           </div>
        </div>
      );

    }

  }


export default Childrouter;
