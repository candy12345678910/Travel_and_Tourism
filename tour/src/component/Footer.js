import "./css/Footer.css";
import {NavLink} from "react-router-dom";
function Footer()
{
    return(
        <>
        <footer>
        
            <div className="imp-link uni-padding">
            <div class="row ">
                <div className="div33 col-sm-4">
                    <h3>About Us</h3>
                    <p>
                        Indian Epic is a Professional Education Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of Education, with a focus on dependability and Tour. We're working to turn our passion for Education into a booming online website. We hope you enjoy our Education as much as we enjoy offering them to you.
                    </p>
                </div>
                <div className="div33 col-sm-4">
                    <h3>Important Links</h3>
                    <ul className="footer-menu">
                        <li><NavLink className="nav-link " to="/">Home</NavLink></li>
                        <li><NavLink className="nav-link " to="/about">About</NavLink></li>
                        <li><NavLink className="nav-link " to="/privacy">Privacy</NavLink></li>
                        <li><NavLink className="nav-link " to="/term">Terms & Condition</NavLink></li>
                        <li><NavLink className="nav-link " to="/contact">Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="div33 col-sm-4">
                <h3>Contact Us</h3>
                <p>152 A/C Shanpukurdhar,<br/>
                   Sheoraphuli Hooghly,<br/>
                   712223
                </p>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright &copy; Indian Epic</p>
        </div>
        </footer>
        </>
    );
}
export default Footer;