import React,{useState} from "react";
import "./css/login.css";
import { Link } from "react-router-dom";
import logo from './img/logo.png';

const Login = () =>
{
    const[log,setUser] = useState({
        email:"",
        password:"",
    });
    const loginInputs=(e)=>{
        setUser({
            ...log,[e.target.name]:e.target.value
        })
        // console.log(log);
    }
    const loginSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:8080/login/",{
            method:'POST',
            body:JSON.stringify(log),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data=await response.json();
        console.log(data);
        if(data.length>0){
            window.location='/';
        }
        else{
            alert("Wrong email or password");
        }
    }

    return(
        <>
            <div className="login_image">
                <div className="container login_main loginBG">
                    <div className="row login_row">
                        <div className="col-md-6 login_side-image">
                        <img className="login_img" src={logo} alt="Indian Epic"></img>
                            <div className="login_text">
                                <p>Join us to have a wonderful travel experience<i classNameName="login_i">--Indian Epic</i></p>
                            </div>
                        </div>
                        <div className="col-md-6 login_right">
                            <div className="login_input-box">
                                <header>Hey there!</header>
                                <div className="input-field">
                                    <input type="email" className="input login_input" id="email" name="email" onChange={loginInputs} required autoComplete="off"></input>
                                    <label for="email">Email</label>
                                </div>
                                <div className="input-field">
                                    <input type="password" className="input login_input" id="password" name="password" onChange={loginInputs} required></input>
                                    <label for="password">Password</label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" className="check-box" id="checkbox" required></input>
                                    <label for="checkbox">  Remember me?</label>
                                </div>
                                <p></p>
                                
                                <div className="input-field">
                                    <input type="submit" className="login_submit" onClick={loginSubmit} value="Sign In"></input>
                                </div>
                                <div className="signup">
                                    <span classNameName="login_span">Don't have an account yet? <Link to="/register"><span classNameName="clickhere">Create one</span></Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;