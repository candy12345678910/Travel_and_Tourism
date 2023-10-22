import React,{useState} from "react";
import "./css/Register.css";

const Register = () => {
    const[user,setUser] = useState({
        name:"",
        email:"",
        phone:"",
        password:"",
    });
    const handleInputs=(e)=>{
        setUser({
            ...user,[e.target.name]:e.target.value
        })
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:8080/register/",{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data=await response.json();
        console.log(data);
        window.location='/login'
        
    }
    return(
        <>
        <div className="registerBG">
        <div className="container reg_container">
            <h1 className="titel">Registration Form</h1>
            <form>
                <div className="main-user-info">
                    <div className="user-input-box">
                        <label>Full Name</label>
                        <input type="text" id="name" name="name"  onChange={handleInputs} placeholder="Full name" required></input>
                        <p/>
                    </div>
                    <div className="user-input-box">
                        <label>Email ID</label>
                        <input type="email" id="email" name="email"  onChange={handleInputs} placeholder="Email ID" required></input>
                        <i></i>
                    </div>
                    <div className="user-input-box">
                        <label>Phone Number</label>
                        <input type="text" id="phone" name="phone"  onChange={handleInputs} placeholder="Phone Number" required></input>
                    </div>
                    <div className="user-input-box">
                        <label>Password</label>
                        <input type="password" id="password" name="password" onChange={handleInputs} placeholder="AaBbCc@123" required></input>
                    </div>
                </div>
                <div className="form-submit-btn">
                    <input type="submit" value="Register" onClick={handleSubmit}></input>
                </div>
            </form>
        </div>
        </div>
        </>
    )
}
export default Register;