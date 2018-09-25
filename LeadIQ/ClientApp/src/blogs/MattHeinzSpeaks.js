import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import BlogAuthor from '../components/BlogAuthor';

class MattHeinzSpeaks extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="MATT HEINZ SPEAKS!!!"
                    author="Jack the Intern"
                    date="Aug 15, 2018"
                    imageUrl="/img/tumblr_static_filename.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                              <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe src="https://www.youtube.com/embed/DGjoKANw-dw" />
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Take a shot with 100 free leads, Matt Heinz did and he's the man!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Jack the Intern"
                            imageUrl="/img/jack-the-intern.jpg"
                            profile="Working towards a career in the Marketing field where I hope to one day assist businesses and individuals with bettering how they do business. Refining the way that salespeople prospect and giving them the tools to better their reply rate is my current goal. Excited to see what LeadIQ can do as a company going forward!" />
                    </div>
                </div>
            </div>
        );
    }
}

export default MattHeinzSpeaks;