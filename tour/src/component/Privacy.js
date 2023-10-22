import "./css/Navbar.css";
import Navbar from "./Navbar.js";
import "./css/Privacy.css";
function Privacy()
{
    return(
        <>
            <Navbar/>    
                <div className="jumbotron text-center">
                    <div className="container">
                    <div classNameName="about_body">
                    <h1 className="privacy_h1 display-4">Privacy Policy for Indian Epic</h1>
                    </div>
                        <p className="privacy_p lead">At Indian Epic, accessible from http://localhost:3000/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Indian Epic and how we use it.</p>

                        <p className="privacy_p lead">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

                        <p className="privacy_p lead">This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Indian Epic. This policy is not applicable to any information collected offline or via channels other than this website.</p>

                        <h2>Consent</h2>

                        <p className="privacy_p lead">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                        
                        <h2>Changes to This Privacy Policy</h2>

                        <p className="privacy_p lead">We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</p>

                        <p className="privacy_p lead">Our Privacy Policy was created with the help of the <a href="https://www.privacypolicygenerator.info">Privacy Policy Generator</a>.</p>

                        <h2>Contact Us</h2>

                        <p className="privacy_p lead">If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>
                </div>
                </div>
        </>
    );
}
export default Privacy;