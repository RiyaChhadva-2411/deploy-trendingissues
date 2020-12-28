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
                <div className="col-md-3"><img alt="specialityphoto" src={image1} className="Speciality__Picture"/></div>
                <span className="Speciality__Derma Speciality__Name">Dermatologist</span>
    

                <div className="col-md-3"><img alt="specialityphoto" src={image2} className="Speciality__Picture" /></div>
                <span className="Speciality__Ayurveda Speciality__Name">Ayurveda</span>

                <div className="col-md-3"><img alt="specialityphoto" src={image3} className="Speciality__Picture" /></div>
                <span className="Speciality__Ophtal Speciality__Name">Ophtalomologist</span>

                <div className="col-md-3"><img alt="specialityphoto" src={image4} className="Speciality__Picture" /></div>
                <span className="Speciality__Neuro Speciality__Name">Neurologist</span>
            </div>
            
            {/*SECOND ROW*/}
            <div className="row Speciality__SecondRow">
                <div className="col-md-4"><img alt="specialityphoto" src={image4} className="Speciality__Picture" /></div>
                <span className="Speciality__Homeo Speciality__Name">Homeopathy</span>

                <div className="col-md-4"><img alt="specialityphoto" src={image3} className="Speciality__Picture" /></div>
                <span className="Speciality__Dietian Speciality__Name">Dietian/<br/>Nutritionist</span>

                <div className="col-md-4"><img alt="specialityphoto" src={image2} className="Speciality__Picture" /></div>
                <span className="Speciality__Pedia Speciality__Name">Pediatrition</span>
            </div>

        </div>
        </div>
    );
}
export default Speciality;