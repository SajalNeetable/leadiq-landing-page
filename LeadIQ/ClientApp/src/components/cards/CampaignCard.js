import React from 'react';

class CampaignCard extends React.Component {
    render() {
        return (
            <div className="col-md-4 col-lg-4">
                <img src={this.props.campaign.imageUrl} className="img-fluied boxImageCampaign" />
                <p className="mt-3">{this.props.campaign.description}</p>
            </div>
        );
    }
}

export default CampaignCard;