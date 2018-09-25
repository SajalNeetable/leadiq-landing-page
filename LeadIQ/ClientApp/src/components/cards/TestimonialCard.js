import React from 'react';

class TestimonialCard extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-sm-6 col-md-3 v-middle">
                    <div className="media quote">
                        <img src="/img/quotes.png" className="img-fluid mr-3" />
                        <div className="media-body">
                            <h5 className="liq-text-primary mb-0">Scott Smith</h5>
                            <small>VP of Sales at CloudApp</small>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 v-middle">
                    <img src="/img/avatar.png" className="img-fluid" alt="avatar" />
                </div>
                <div className="col-sm-12 col-md-6 v-middle">
                    <blockquote className="blockquote">“LeadIQ just gets it. They make outbound prospecting way less tedious for our SDR team, which makes them do it more. Their integration with Outreach saves our sales team so much time.”</blockquote>
                </div>
            </div>
        );
    }
}

export default TestimonialCard;