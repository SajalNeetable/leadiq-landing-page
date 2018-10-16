import React, { Component } from 'react';
import videos from "./../data/videos.json";
import Count from '../components/buttons/Count';
import VideoCard from '../components/cards/VideoCard';

export default class RateMyPitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: videos
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="cover-rate-my-pitch">
                    <div className="container">
                        <section>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="media">
                                        <img src="/img/laptop-notification.png" className="img-fluied mr-3" height="64px" alt="laptop-notification" />
                                        <div className="media-body">
                                            <h3 className="mt-0">Rate My Pitch Webinar</h3>
                                            <p>Ryan O’Hara and a few special guests will go through your cold emails and give advice on how to turn them into more meetings. Instructions on how to submit your cold emails will be sent out prior to recording.</p>
                                        </div>
                                    </div>
                                    <div className="media mt-5">
                                        <img src="/img/ryan-round-avatar.png" alt="ryan" className="img-fluied mr-3" height="64px" />
                                        <div className="media-body">
                                            <h3 className="mt-0">Hosted By</h3>
                                            Muppet Haircut Enthusiast Ryan O’Hara
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="text-center">Join Us Tuesday August 28th @2p EST</h3>
                                    <form id="free-leads-form" className="mt-5">
                                        <div className="form-group container" id="email-field">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-lg" id="firstName" name="email" placeholder="First Name" required="required" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-lg" id="lastName" name="email" placeholder="Last Name" required="required" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="Email Address" required="required" />
                                            </div>
                                            <div className="text-center">
                                                <Count size="lg" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="container">
                    <section>
                        <div className="media mt-5">
                            <img className="img-fluied mr-5" src="/img/analytics-stats.png" alt="Analytics" height="100px" />
                            <div className="media-body">
                                <h1 className="mt-0">Join us to enhance your cold email tactics!</h1>
                                <h3>You’ll learn:</h3>
                                <ul>
                                    <li>Biggest cold email mistakes people make</li>
                                    <li>How others in your industry are cold emailing</li>
                                    <li>What makes a good cold email</li>
                                    <li>Real-time feedback on your cold emails*</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="container">
                    <section>
                        <h1 className="text-center">Previous Pitches</h1>
                        <div className="row mt-3">
                            {this.state.videos.map((video, index) => { return (<VideoCard video={video} key={index} />); })}
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}