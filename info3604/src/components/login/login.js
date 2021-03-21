import React from "react";
import appLogo from "../../mmi_logo.png";

export class Login extends React.Component{

    constructor (props){
        super(props);
    }

    render(){
        return (
               <div className="cont">
               <div className="form">
                    <form action= "/login" method='POST'>

                    <div className = "image">
                        <img src= {appLogo} width = "210" height = "98"/>
                    </div>
                    <div className="header2"> Welcome back! </div>

                    <div className = "header4"> Login to manage your account</div>

                    <div className = "shift-left">
                    <label>
                        <div data-validate = "Valid email is required: ex@abc.xyz">
                        <input type="email" name="email" id="log_email" placeholder ="Enter your email address"/>
                        </div>
                    </label>
                    </div>

                    <div className = "shift-left">
                    <label>
                        <div data-validate = "Password is required">
                            <input type="password"  name="pass" id="log_password" placeholder="Enter your password" />
                        </div>
                    </label>
                    </div>

                   <div className = "shift-left">
                        <button type="submit" className="submit">Sign Up</button>
                   </div>

                    <div className = "shift-left">
                        <p className="forgot-pass">Forgot your password?  Reset </p>
                    </div>
                  </form>
               </div>
               </div>
        );
    }
}