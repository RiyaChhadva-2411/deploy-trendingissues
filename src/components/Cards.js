import React from 'react';
import "./Cards.css";
// import svg1 from "../svg/arrow.svg";
import doctor1 from "../images/doctor1.png";
import doctor2 from "../images/doctor2.png";
import doctor3 from "../images/doctor3.png";
import doctor4 from "../images/doctor4.png";

function Cards(){
    return(
        <div>
        <div className="Cards__heading">My Doctors<div className="fa fa-angle-right Cards__svg1" /> </div>
        <div className="container-fluid">
         
            {/*FIRST ROW*/}
            <div className="row Cards__FirstRow">
            
            {/*First Column of First Row*/}
            <div className="col-md-6 col-sm-12">
                <div>
                    <img className="Cards__LeftDoctors" src={doctor1} alt="doctor1"/>
                </div>
                <div className="Cards__LeftNames">
                    <p className="Cards__name">Dr. Namita Kalyani Bhansaki Sushil Karyakram</p>
                    <p className="Cards__post">Neurosurgeon, Oncologist, ENT Specialist</p>
                    <p className="Cards__address">Bandra (W)</p>
                </div>
                <div className="Cards__Leftbutton">
                    <div type="button" className="btn btn-success">Call</div><br />
                    <div type="button" className="btn btn-success">Book</div>
                </div>
            </div>

            {/*Second Column of First Row*/}
            <div className="col-md-6 col-sm-12 ">
            <div>
                    <img className="Cards__RightDoctors" src={doctor2} alt="doctor1"/>
                </div>
                <div className="Cards__RightNames">
                    <p className="Cards__name">Dr. Swapnil Krishnakant Katare</p>
                    <p className="Cards__post">Neurosurgeon, Oncologist, ENT Specialist</p>
                    <p className="Cards__address">Bandra (W)</p>
                </div>
                <div className="Cards__button">
                    <div type="button" className="btn btn-success">Call</div><br />
                    <div type="button" className="btn btn-success">Book</div>
                </div>
            </div>
            </div>
            
            <br /><br /><br />
            {/*SECOND ROW*/}
            <div className="row Cards__SecondRow">

                {/*First column of Second rwo*/}
                <div className="col-md-6 col-sm-12">
                <div>
                    <img className="Cards__LeftDoctors" src={doctor3} alt="doctor1"/>
                </div>
                <div className="Cards__LeftNames">
                    <p className="Cards__name">Dr. Namita Kalyani Bhansaki Sushil Karyakram</p>
                    <p className="Cards__post">Neurosurgeon, Oncologist, ENT Specialist</p>
                    <p className="Cards__address">Bandra (W)</p>
                </div>
                <div className="Cards__Leftbutton">
                    <div type="button" className="btn btn-success">Call</div><br />
                    <div type="button" className="btn btn-success">Book</div>
                </div>
                </div>
                
                {/*Second column of second row*/}
                <div className="col-md-6 col-sm-12">
                <div>
                    <img className="Cards__RightDoctors" src={doctor4} alt="doctor1"/>
                </div>
                <div className="Cards__RightNames"><br />
                    <p className="Cards__name">Dr. Pooja Gajera</p>
                    <p className="Cards__post">Neurosurgeon</p>
                    <p className="Cards__address">Bandra (W)</p>
                </div>
                <div className="Cards__button">
                    <div type="button" className="btn btn-success">Call</div><br />
                    <div type="button" className="btn btn-success">Book</div>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Cards;