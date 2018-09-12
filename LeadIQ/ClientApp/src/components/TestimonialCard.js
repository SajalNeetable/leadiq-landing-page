import React from 'react';
import style from './../app.css';

class TestimonialCard extends React.Component {

    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col-6 col-sm-3  pl-4 pt-5 quoteUser">
                        <img src="/img/quotes.png" className="quotesDesign" alt="quotes" />
                        <label className="userQuoteText"><mark>Scott Smith</mark><br /> VP of Sales at CloudApp</label>
                    </div>
                    <div className="col-6 col-sm-3">
                        <img src="/img/avatar.png" className="img-fluid" alt="avatar" />
                    </div>
                    <div className="col-12 col-sm-6 pt-5">
                        <h4 className="commentText">“LeadIQ just gets it. They make outbound prospecting way less tedious for our SDR team, which makes them do it more. Their integration with Outreach saves our sales team so much time.”</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default TestimonialCard;