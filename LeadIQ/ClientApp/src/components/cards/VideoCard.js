import React from 'react';

class VideoCard extends React.Component {
    render() {
        return (
            <div className="col-md-6 col-lg-4">
                <div className="card mt-5" key={this.props.video.title}>
                    <img src={this.props.video.imageUrl} className="img-fluied" alt={this.props.video.title} />
                    <div className="card-body">
                        <h3 className="liq-text-primary">{this.props.video.title}</h3>
                        <p>{this.props.video.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoCard;