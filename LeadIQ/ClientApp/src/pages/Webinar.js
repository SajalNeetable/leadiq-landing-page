import React from 'react';
import WebinarCard from '../components/cards/WebinarCard';
import webinarVideos from "./../data/webinar-videos-links.json";

class Webinar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: webinarVideos
        };
    }


    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        return (
            <div>
                <div className="cover">
                    <div className="d-none d-md-block">
                        <img src="/img/sales-home-cover.png" className="img-fluied" alt="cover" />
                    </div>
                    <div className="cover-content">
                        <div className="container">
                            <section>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1>Webinars</h1>
                                        <p>Prospecting videos with a twist of Ryan O’Hara.</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="container">
                        <div className="row">
                            {this.state.videos.map((video, index) => { return (<WebinarCard video={video} index={index} />); })}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Webinar;