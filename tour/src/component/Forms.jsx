import { NavLink } from "react-router-dom";
import "./css/forms.css"
/*import "./User_login.jsx"
import "./Administration_login.jsx"
import "./Propriter_login.jsx"*/
const Forms = () => {
    return(
        <>
        <section>
            <div class="container-fluid">
		        <div class="row">
			        <div class="col-sm-6 mx-auto d-block">
				        <div class="forms">
					        <h1>Login type</h1>	
                            <h3>
                                <a href="#">User login</a>
                                <p/>
                                <a href="#">Admin login</a>
                                <p/>
                                <a href="#">Prop login</a>
                            </h3>
				        </div>
			        </div>
		        </div>
	        </div>
        </section>
        </>
    )
}
export default Forms