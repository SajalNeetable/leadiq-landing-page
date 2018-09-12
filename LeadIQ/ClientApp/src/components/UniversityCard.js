import React from 'react';
import GetUniversityButton from '../components/GetUniversityButton';
import style from './../app.css';

class UniversityCard extends React.Component {

    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                        <img src="/img/logo-university.png" className="img-fluid universityLogo" />
                        <GetUniversityButton />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
                        <label>We believe that prospecting should be fun and thoughtful.
                            LeadIQ was built with research first prospecting in mind.
                            Learn how you can drive sales with thoughtful outreach tactics
                            using the power of LeadIQ’s platform.
                        </label>
                    </div>
                    <div className="col-12 col-sm-21 col-md-12 col-lg-4">
                        <img src="/img/artBoard.png" className="img-fluid artBoardDesign" />
                    </div>
                </div>
            </div>
        );
    }
}

export default UniversityCard;