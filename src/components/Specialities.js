import React from 'react';
import "./Specialities.css";
import image1 from "../images/doctor1.png";
import image2 from "../images/doctor2.png";
import image3 from "../images/doctor3.png";
import image4 from "../images/doctor4.png";

function Speciality(){
    return(
        <div>
        <div className="Speciality__heading">Trending Specialities<span className="fa fa-angle-right Speciality__svg3" /></div>
        <div className="container-fluid Speciality__container">

            {/*FIRST ROW*/}
            <div className="row Speciality__FirstRow">
                <div className="col-md-3 Speciality__column"><img alt="specialityphoto" src={image1} className="Speciality__Picture"/>
                <div className="Speciality__Name">Dermatologist</div>
                </div>
                
    
                <div className="col-md-3 Speciality__column"><img alt="specialityphoto" src={image2} className="Speciality__Picture" />
                <div className="Speciality__Name">Ayurveda</div>
                </div>
                

                <div className="col-md-3 Speciality__column"><img alt="specialityphoto" src={image3} className="Speciality__Picture" />
                <div className="Speciality__Name">Ophtalomologist</div>
                </div>
                

                <div className="col-md-3 Speciality__column"><img alt="specialityphoto" src={image4} className="Speciality__Picture" />
                <div className="Speciality__Name">Neurologist</div>
                </div>
                
            </div>
            
            {/*SECOND ROW*/}
            <div className="row Speciality__SecondRow">
                <div className="col-md-4 Speciality__column"><img alt="specialityphoto" src={image4} className="Speciality__Picture" />
                <div className="Speciality__Name">Homeopathy</div>
                </div>
                

                <div className="col-md-4 Speciality__column"><img alt="specialityphoto" src={image3} className="Speciality__Picture" />
                <div className="Speciality__Name">Dietian/<br/>Nutritionist</div>
                </div>
                

                <div className="col-md-4 Speciality__column"><img alt="specialityphoto" src={image2} className="Speciality__Picture" />
                <div className="Speciality__Name">Pediatrition</div>
                </div>
                
            </div>

        </div>
        </div>
    );
}
export default Speciality;