import React,{Component} from 'react';
import {
  
  Link,
} from 'react-router-dom'
import "./login.css"
class Login extends Component {
    render(){
     return (
        <div className="login">

            <div className="user">用户名:<input type="text" name="userName" id="userName" placeholder="请输入用户名"/></div>
            <div className="pass">登录口令:<input type="password" name="password" id="password" placeholder="请输入密码"/></div>
            <div className="submit-box"><Link to="/information"><input type="submit" value="登录"  className="submit" readOnly={true} /></Link></div>
            
        </div>
      );
    }

  }


export default Login;
