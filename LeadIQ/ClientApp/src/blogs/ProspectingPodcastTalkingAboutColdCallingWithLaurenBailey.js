import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class ProspectingPodcastTalkingAboutColdCallingWithLaurenBailey extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Prospecting Podcast: Talking About Cold Calling with Lauren Bailey"
                    description="It was only a matter of time before Lauren Bailey and I would get in a Zoom room and jam about prospecting. Lauren, also known as LB in the sales world, is one of the best cold callers in the world. Factor8 has trained thousands of reps with cold calling, so we went deep inside her mind to understand how to actually turn a cold call into a warm and fuzzy call. Listen below!"
                    author="Ryan O’Hara"
                    date="Apr 25, 2018"
                    imageUrl="/img/Capture-1.png"
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-center mt-3">
                                    <iframe src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F435155181&amp" scrolling="no" />
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>If you want to test 100 free phone numbers with us, the magic button below will get you started.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>

        );
    }
}

export default ProspectingPodcastTalkingAboutColdCallingWithLaurenBailey;