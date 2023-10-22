import "./css/Navbar.css";
import Navbar from "./Navbar.js";
import "./css/contact.css";
function Contact()
{
    return(
        <>
            <Navbar/>
            <section class="jumbotron">
            <div classNameName="contact_body">
                <div class="container">
                <h1 class="contact_h1 display-4">Contact Us</h1>
                <p class="contact_p lead">We'd love to hear from you!</p>
                <div class="row justify-content-center">
                    <div class="col-md-6">
                    <form class="contact-form">
                        <div class="form-group">
                        <input type="text" class="form-control" placeholder="Name" required/>
                        </div>
                        <div class="form-group">
                        <input type="email" class="form-control" placeholder="Email" required/>
                        </div>
                        <div class="form-group">
                        <textarea class="form-control" placeholder="Message" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </form>
                    </div>
                    </div>
                    </div></div>
                    <section class="contact-info py-5">
                        <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                            <i class="fas fa-map-marker-alt"></i>
                            <p>India</p>
                            </div>
                            <div class="col-md-4">
                            <i class="fas fa-phone-alt"></i>
                            <p>+91 9800692093</p>
                            </div>
                            <div class="col-md-4">
                            <i class="fas fa-envelope"></i>
                            <p>indianepic@example.com</p>
                            </div>
                        </div>
                        </div>
                    </section>
                    
                
                
            </section>  
        </>
    );
}
export default Contact;