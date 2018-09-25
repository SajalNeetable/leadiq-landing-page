import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class HowDoesLeadiqGetOurData extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="How Does LeadIQ Get Our Data?"
                    description="I get a lot folks always asking where does LeadIQ get their data? We do provide an array of cell phones, direct dials, email addresses, and company data.  I can’t give you all the secrets we use, but I can go into it a little bit. Here’s a quick video discussing a few examples of the different things LeadIQ does to find your prospects:"
                    author="Ryan O’Hara"
                    date="Jun 4, 2018"
                    imageUrl="/img/bowling-alleys.jpg"
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-center mt-3">
                                    <iframe src="//play.vidyard.com/6UmcqS3mm4RyudhGwL7jaQ.html?v=3.1.1" scrolling="no" />
                                </div>
                              
                            </div>
                        </div>

                        <section className="text-center">
                            <p>Test our data with 100 free leads!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>

        );
    }
}

export default HowDoesLeadiqGetOurData;