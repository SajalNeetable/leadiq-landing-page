import React from 'react';
import { Link } from "react-router-dom";

class PodcastCards extends React.Component {
    render() {
        return (
            
            <div className={this.props.podcasts.mainCls}>
                {this.props.podcasts.audioData.map((audio, index) => {
                        return (
                            <div className={audio.addCls} key={index}>
                                <Link to={audio.navLink}>
                                <div className="blog-card-design" style={{
                                    backgroundImage: `linear-gradient(-180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(${audio.bgImage})`,
                                }}>
                                <div className="customer-card-text">
                                    <h3 className="text-white">{audio.title}</h3>
                                </div>
                                    </div>
                                </Link>
                            </div>
                    );
                })}
                </div>
        );
    }
}

export default PodcastCards;