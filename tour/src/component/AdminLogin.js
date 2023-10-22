import React,{useState} from "react";
import "./css/AdminLogin.css";
const AdminLogin=()=>{

    const[alog,setAdmin] = useState({
        email:"",
        password:"",
    });
    const adminInputs=(e)=>{
        setAdmin({
            ...alog,[e.target.name]:e.target.value
        })
        // console.log(log);
    }
    const adminSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:8080/login/",{
            method:'POST',
            body:JSON.stringify(alog),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data=await response.json();
        console.log(data);
        if(data.length>0){
            window.location='/viewadminpagedata';
        }
        else{
            alert("Wrong email or password");
        }
    }

return(
    <>
    <div className="alogin_bg">
        <div class="container">
            <div class="login-container">
                <h2>Admin Login</h2>
                <form>
                    <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" name="email" onChange={adminInputs} placeholder="Enter your email"/>
                    </div>
                    <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" name="password" onChange={adminInputs} placeholder="Enter your password"/>
                    </div>
                    <button type="submit" onClick={adminSubmit} class="btn btn-primary btn-block">Login</button>
                </form>
            </div>
        </div>
    </div>
  </>
);
}
export default AdminLogin;