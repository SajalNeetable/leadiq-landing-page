import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class HowOneColdEmailMistakeCostThisRepAReply extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Video: How one cold email mistake cost this rep a reply."
                    description="Yesterday I got a cold email and it inspired me to make a video to help the sender out. Of course I blocked the information out, but let’s see where this cold email went wrong and why they didn’t get a reply from me. Here’s what happened and how they could fix it:"
                    author="Ryan O’Hara"
                    date="Mar 13, 2018"
                    imageUrl="/img/serpico.jpeg"
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-center mt-3">
                                    <iframe src="//play.vidyard.com/Rsf5F9uZtMKH7a2dQptJjc.html?v=3.1.1" scrolling="no"/>
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Send some great cold emails to 100 free leads.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>

        );
    }
}

export default HowOneColdEmailMistakeCostThisRepAReply;