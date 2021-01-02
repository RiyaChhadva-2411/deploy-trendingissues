import React from 'react';
import "./Issues.css";
import Issue1 from "../images/issue1.png";
import Issue2 from "../images/issue2.png";
import Issue3 from "../images/issue3.png";
import Issue4 from "../images/issue4.png";

function Issue(){
    return(
        <div>
        <div className="Issues__heading">Trending Issues<div className="fa fa-angle-right Issues__svg2" /></div>
        <div className="container-fluid Issues__container">
        
            {/*FIRST ROW*/}
            <div className="row Issues__FirstRow">
                <div className="col-md-3 Issues__column"><img alt="issuephoto" src={Issue1} className="Issues__Picture"/>
                <div className="Issues__Name">Covid</div>
                </div>
                
                <div className="col-md-3 Issues__column"><img alt="issuephoto" src={Issue2} className="Issues__Picture" />
                <div className="Issues__Name">Hairfall</div>
                </div>
               
                <div className="col-md-3 Issues__column"><img alt="issuephoto" src={Issue3} className="Issues__Picture" />
                <div className="Issues__Name">Acne</div>
                </div>
                
                <div className="col-md-3 Issues__column"><img alt="issuephoto" src={Issue4} className="Issues__Picture" />
                <div className="Issues__Name">Diabetes</div>
                </div>
                
            </div>
            
            {/*SECOND ROW*/}
            <div className="row Issues__SecondRow">
                <div className="col-md-4 Issues__column"><img alt="issuephoto" src={Issue4} className="Issues__Picture" />
                <div className="Issues__Name">Knee Pain</div>
                </div>
                
                <div className="col-md-4 Issues__column"><img alt="issuephoto" src={Issue3} className="Issues__Picture" />
                <div className="Issues__Name">Kidney Stone</div>
                </div>
                
                <div className="col-md-4 Issues__column"><img alt="issuephoto" src={Issue2} className="Issues__Picture" />
                <div className="Issues__Name">Weight Loss</div>
                </div>
                
            </div>

        </div>
        </div>
    );
}
export default Issue;