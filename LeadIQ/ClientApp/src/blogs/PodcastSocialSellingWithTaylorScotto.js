import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class PodcastSocialSellingWithTaylorScotto extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Podcast: Social selling with Taylor Scotto"
                    description="Ryan O’Hara sits down with Taylor Scotto, Head of Business Development at Lingo Live and talked about social selling, prospecting, and working at LinkedIn as a prospector."
                    author="Ryan O'Hara"
                    date="May 10, 2018"
                    imageUrl="/img/taylor-scotto.png"

                />
                
                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/442264848&amp;color=%23414b5e&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"  scrolling="no"/>
                                </div>

                                <p className="mt-3">If you don’t see the Merge tool, you may need to bug your Salesforce admin.</p>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Want to mix social selling into your prospecting? Get 100 free email addresses of your prospects.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>
        );
    }
}

export default PodcastSocialSellingWithTaylorScotto;