import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class TalkingWithJoshBraun extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Talking with Josh Braun"
                    description="Last week, Josh Braun was kind enough to have me on his podcast to talk about prospecting, and making it fun for prospects of all ages and seniority. Listen in below!"
                    author="Ryan O'Hara"
                    date="Apr 30, 2018"
                    imageUrl="/img/Josh-Barun-smiling.png"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-5">
                                    <iframe src="https://www.youtube.com/embed/ZTX-Kv_Hk-c" scrolling="no" />
                                </div>

                                <p className="mt-3">If you <a href="https://www.linkedin.com/in/hirejoshbraun/">don’t follow Josh, who is the founder of SalesDNA, you need to go follow him on LinkedIn! </a>He’s awesome, and has some really cool guest on his podcast. Much cooler than I’ll ever be… sigh….</p>

                                <div className="text-center">
                                    <img src="/img/hello-darkness.gif" className="img-fluied" />
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Get 100 of the fine...hand crafted leads.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>
        );
    }
}

export default TalkingWithJoshBraun;