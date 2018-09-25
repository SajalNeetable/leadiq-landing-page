import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class VideoTutorialHowToMergeTwoAccountsInSalesforce extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Video Tutorial: How to Merge Two Accounts in Salesforce"
                    description="The other day, Jeremy Leveille, one of our biz dev specialists asked me, “How the hell do you merge accounts in Salesforce?” Rather than quietly help him, I thought… man why I don’t just show the whole world how to do it. Here’s a quick video on how to do it (you may want to full screen this video):"
                    author="Ryan O'Hara"
                    date="Apr 11, 2018"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe  src="//play.vidyard.com/APeeDPiLrNtyA5uWZkRrTF.html?v=3.1.1"  scrolling="no" />
                                </div>

                                <p className="mt-3">If you don’t see the Merge tool, you may need to bug your Salesforce admin.</p>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Get 100 free leads imported into Salesforce. Hit the button!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>
        );
    }
}

export default VideoTutorialHowToMergeTwoAccountsInSalesforce;