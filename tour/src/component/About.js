import "./css/Navbar.css";
import Navbar from "./Navbar.js";
import "./css/About.css";
function About()
{
    return(
        <>
            <Navbar/>
                
                <div className="jumbotron text-center">
                    <div className="container">
                    <div classNameName="about_body">
                    <h1 className="about_h1 display-4">About Us</h1>
                    <p className="about_p lead">Indian Epic is a Professional Education Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of Education, with a focus on dependability and Tour. We're working to turn our passion for Education into a booming online website. We hope you enjoy our Education as much as we enjoy offering them to you.</p>
                    </div>
                </div>
                </div>
            
        <section className="py-5">
            <div className="container">
            <div className="row">
                <div className="col-lg-3">
                <div className="team-member">
                    <h3>Abhijit Debnath</h3>
                    <p>Lead Developer</p>
                </div>
                </div>
                <div className="col-lg-3">
                <div className="team-member">
                    <h3>Argha Ghosh</h3>
                    <p>Lead Developer</p>
                </div>
                </div>
                <div className="col-lg-3">
                <div className="team-member">
                    <h3>Ditsa Poddar</h3>
                    <p>Lead Developer</p>
                </div>
                </div>
                <div className="col-lg-3">
                <div className="team-member">
                    <h3>Ronit Das</h3>
                    <p>Lead Developer</p>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
}
export default About;