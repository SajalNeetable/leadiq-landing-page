import React from 'react';
import partners from "./../../data/partners.json";

class PartnerCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            partners: partners
        };
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-4 partner-title">
                    <h2>Meet Our Integration Partners</h2>
                </div>
                <div className="col-lg-8">
                    <div className="container">
                        <div className="row">
                            {
                                this.state.partners.map(partner => {
                                    return (
                                        <div className={"col-6 col-sm-4 partner-logo"} key={partner.label}>
                                            <img className="img-fluid" src={partner.imageUrl} alt={partner.label} />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PartnerCard;