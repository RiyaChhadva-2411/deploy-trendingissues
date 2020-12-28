import React from 'react';
import "./Issues.css";
import Issue1 from "../images/issue1.png";
import Issue2 from "../images/issue2.png";
import Issue3 from "../images/issue3.png";
import Issue4 from "../images/issue4.png";

function Issue(){
    return(
        <div>
        <div className="Issues__heading">Trending Issues<span className="fa fa-angle-right Issues__svg2" /></div>
        <div className="container-fluid Issues__container">

            {/*FIRST ROW*/}
            <div className="row Issues__FirstRow">
                <div className="col-md-3"><img alt="issuephoto" src={Issue1} className="Issues__Picture"/></div>
                <span className="Issues__Covid Issues__Name">Covid</span>
    

                <div className="col-md-3"><img alt="issuephoto" src={Issue2} className="Issues__Picture" /></div>
                <span className="Issues__Hairfall Issues__Name">Hairfall</span>

                <div className="col-md-3"><img alt="issuephoto" src={Issue3} className="Issues__Picture" /></div>
                <span className="Issues__Acne Issues__Name">Acne</span>

                <div className="col-md-3"><img alt="issuephoto" src={Issue4} className="Issues__Picture" /></div>
                <span className="Issues__Diabetes Issues__Name">Diabetes</span>
            </div>
            
            {/*SECOND ROW*/}
            <div className="row Issues__SecondRow">
                <div className="col-md-4"><img alt="issuephoto" src={Issue4} className="Issues__Picture" /></div>
                <span className="Issues__Kneepain Issues__Name">Knee Pain</span>

                <div className="col-md-4"><img alt="issuephoto" src={Issue3} className="Issues__Picture" /></div>
                <span className="Issues__KidneyStone Issues__Name">Kidney Stone</span>

                <div className="col-md-4"><img alt="issuephoto" src={Issue2} className="Issues__Picture" /></div>
                <span className="Issues__WeightLoss Issues__Name">Weight Loss</span>
            </div>

        </div>
        </div>
    );
}
export default Issue;