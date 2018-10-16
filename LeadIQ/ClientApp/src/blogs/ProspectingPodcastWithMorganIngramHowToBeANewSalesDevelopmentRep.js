import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class ProspectingPodcastWithMorganIngramHowToBeANewSalesDevelopmentRep extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="Prospecting Podcast with Morgan Ingram: Being A New Sales Development Rep"
                    description="Are you a new sales development rep trying to figure out  how to find success? In February,  I had a chance to sit down and interview the wonderful, young, bright, and did I already say wonderful… Morgan Ingram. Ingram was an SDR at Terminus coming out college, but over past few months since the interview, has already been promoted to Manager of Sales Development at Terminus."
                    author="Ryan O’Hara"
                    date="Jun 26, 2017"
                    imageUrl="/img/leadiq-beach-dog.png"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>While working at Terminus, Morgan is best known for hosting The <a href="https://www.youtube.com/channel/UC5mIKms3bZLtuXapHBVp2tA/about">SDR Chronicles</a>, the goto YouTube channel for any new SDR’s trying to solve life’s hardest questions in prospecting.</p>
                                <h3>In this episode, we talk about how he’s manage to find success as a first time Sales Development Representative.</h3>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe scrolling="no" title="video" src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F330177275&amp;show_artwork=true&amp;maxwidth=1080&amp;maxheight=1000"/>
                                </div>
                                <p>If you are more of an iTunes person, you can download <a href="https://itunes.apple.com/us/podcast/prospecting-podcast-by-leadiq/id1126111869?mt=2">the podcast here</a>.</p>
                            </div>
                        </div>

                        <section className="text-center">
                            <p>We're giving away a 7-day FREE trial! Sign up right now!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProspectingPodcastWithMorganIngramHowToBeANewSalesDevelopmentRep;