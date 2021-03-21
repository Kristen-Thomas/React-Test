import React from "react";
import appLogo from "../../mmi_logo.png";

export class Signup extends React.Component{

    constructor (props){
        super(props);
    }

    render(){
        return (
         <div className="cont">
         <div className="form">
            <form action="/signup" method='POST'>

                <div className = "image">
                        <img src= {appLogo} />
                </div>
                <div className = "header2">Create your Account</div>

                <div className = "header4"> Join us today!</div>

                <div className = "shift-left">
                <label>
                    <input type="text" id="name" name="name"   placeholder="Enter your name"/>
                </label>
                </div>

                <div className = "shift-left">
                    <label>
                    <div data-validate = "Valid email is required: ex@abc.xyz">
                        <input type="text"  name="email" id="email" placeholder="Enter your email"/>
                    </div>
                </label>
                </div>

                <div className = "shift-left">
                     <label>
                        <div>
                            <input type="text" class="input100"  name="occupation" id="occupation" placeholder="Enter your occupation"/>
                        </div>
                    </label>
                </div>

                <div className = "shift-left">
                <label>
                    <div>
                        <input type="password"  name="pass" id="password" placeholder="Enter your password"/>
                    </div>
                </label>
                </div>

                <div className = "shift-left">
                <label>
                    <div>
                        <input type="password" placeholder="Confirm your password"/>
                    </div>
                </label>
                </div>

                <div className = "shift-left">
                <button type="submit" className="submit">Sign Up</button>
                </div>
            </form>
        </div>
        </div>
        );
    }
}