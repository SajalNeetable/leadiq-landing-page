import React from 'react';
import partners from "./../data/partners.json";

class PartnerCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            partners: partners
        };
    }

    render() {
        return (
            <div className="partners">
                <div className="row">
                    <div className="col-sm-4 integrationPartners">
                        <h2 className="mt-5">Meet Our <br /> Integration Partners</h2>
                    </div>
                    <div className="col-sm-8">
                        <div className="container">
                            <div className="row">
                                {
                                    this.state.partners.map((partner, index) => {
                                        return (
                                            <div className={"col-12 col-sm-4 col-md-4 partnerDesign " + partner.imageCls} key={partner.label}>
                                                <img className="img-fluid" src={partner.imageUrl} alt={partner.label} />
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PartnerCard;