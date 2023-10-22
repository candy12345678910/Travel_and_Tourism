import "./css/Navbar.css";
import Navbar from "./Navbar.js";
import "./css/Term.css";
function Term()
{
    return(
        <>
            <Navbar/>    
                <div className="jumbotron text-center">
                    <div className="container">
                    <div classNameName="about_body">
                    <h1 className="term_h1 display-4">Website Terms and Conditions of Use</h1>
                    </div>
                        <h2>Term</h2>

                        <p className="term_p lead">By accessing this Website, accessible from http://localhost:3000/, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>
                        
                        <h2>Use License</h2>

                        <p className="term_p lead">Permission is granted to temporarily download one copy of the materials on indian epic's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                        <ul>
                            <p>1. modify or copy the materials;</p>
                            <p>2. use the materials for any commercial purpose or for any pubpc display.</p>
                            <p>3. attempt to reverse engineer any software contained on indian epic's Website.</p>
                            <p>4. remove any copyright or other proprietary notations from the materials.</p>
                            <p>5. transferring the materials to another person or "mirror" the materials on any other server.</p>
                        </ul>
                        <h2>Disclaimer</h2>
                        <p className="term_p lead">All the materials on indian epic's Website are provided "as is". indian epic makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, indian epic does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>

                        <h2>Site Terms of Use Modifications</h2>
                        <p className="term_p lead">indian epic may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>
                        
                        <h2>Your Privacy</h2>
                        <p className="term_p lead">Please read our Privacy Policy.</p>
                        
                        <h2>Governing Law</h2>
                        <p className="term_p lead">Any claim related to indian epic's Website shall be governed by the laws of in without regards to its conflict of law provisions.</p>
                </div>
                </div>
        </>
    );
}
export default Term;