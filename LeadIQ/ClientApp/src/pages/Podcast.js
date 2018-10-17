import React from 'react';
import RequestTrial from '../components/buttons/RequestTrial';
import podcastAudioLists from './../data/podcast-audio-lists.json';
import PodcastCards from '../components/cards/PodcastCards';

class Podcast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            podcasts: podcastAudioLists
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        return (
            <div>
                <div>
                    <div className="privacy-Cover">
                        <div className="container prospectHeaderTitle">
                            <section className="pt-5 gettingStarted">
                                <h1 className="text-white text-center  mb-4 fa-2x prospectText"><b>Podcast</b></h1>
                                <p className="text-white text-center mb-4" style={{ fontWeight: "400" }}>LeadIQ not only provides great sales products. We also share content that will help you maximize your sales.</p>
                                <div className="justify-content-center d-flex">
                                    <RequestTrial size="lg"  />
                                </div>
                            </section>
                        </div>

                    </div>
                    <div className="faq-waveDesign">
                        <img src="/img/wave-four.png" className="img-fluied faq-waveDesignProspect" alt="wave" />
                    </div>
                    <div className="blog-container">
                        <div className="container">
                            <div className="card">
                                <div className="card-body card-blog">
                                    {this.state.podcasts.map((podcast, index) => { return (<PodcastCards podcasts={podcast} key={index} />) })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Podcast;