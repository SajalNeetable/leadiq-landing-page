import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class PickingTheRightAccountsWhenProspecting extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Picking the Right Accounts When Prospecting"
                    description="Last week during our RateMyPitch someone asked me, “How Do You Pick What Accounts To Go After?”  With the account based model, it can be really tricky to figure this out, especially since what accounts you go after a big reason you don’t hear back from prospects. Last week, I was at Saastr and studying prospecting tales. One of patterns I noticed is that companies did best when they worked with logos. Meaning…companies we use and live with everyday.  I decided to try and tackle this subject about picking the right accounts. "
                    author="Ryan O'Hara"
                    date="Feb 20, 2018"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe src="https://www.youtube.com/embed/wzb3_9eL2VM" scrolling="no" />
                                </div>

                                <p className="mt-3">I give a shout out to a few friends <a href="https://www.linkedin.com/company/6442095/">TripActions</a> and <a href="https://www.linkedin.com/in/michael-sindicich-%E2%98%81-97513879/">Michael Sindicich</a></p>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>100 Free Leads + You = More Opps</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>
        );
    }
}

export default PickingTheRightAccountsWhenProspecting;