import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class HowToProperlyAskForReferralsInSales extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="How To Properly Ask for Referrals In Sales"
                    description="I was going through the interviews I’ve done over the past few months, and I realized I never posted this amazing one I did with Mike Hurley, founder and CEO of WarmUp. Mike’s company helps sales reps get more referrals. With lots of data, 
                    and stories to tell, here’s an interview I did with Mike about how you can increase referrals to build your pipeline. Mike is a smart guy!"
                    author="Ryan O’Hara"
                    date="Jun 20, 2018"
                    imageUrl="/img/referral-in-sales.png"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter">
                                    <iframe src="https://www.youtube.com/embed/9xsRJEvkwbg" scrolling="no" />
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Want to prospect your customer's connections? Build a referral prospect lists with LeadIQ. Try 100 free leads.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>
        );
    }
}

export default HowToProperlyAskForReferralsInSales;