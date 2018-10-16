import React from 'react';
import BlogAuthor from '../components/BlogAuthor';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';

class TheShiftTowardsTheSocialCrm extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="The Shift Towards the Social CRM"
                    description="It has been a little over a week since Microsoft announced that it would be acquiring social network LinkedIn, and has caused quite an uproar in certain circles for what it’s implications mean. Needless to say this isn’t coming to Microsoft cheaply either ($26.2 Billion) as they have been in a bidding war with Salesforce for quite some time. One question that immediately came to mind from my perspective is why were these two CRM giants fighting over LinkedIn?"
                    author="Mei Siauw"
                    date="Jul 14, 2016"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>For quite some time now, the traditional CRM has been shifting towards becoming a social CRM, integrating customers social media data into its systems so they can better engage with them.</p>
                                <p>
                                    Early on, a CRM could leverage the LinkedIn API to easily sync a user’s data to their profile within the CRM. However, In 2014 LinkedIn had closed its API to many CRM vendors who had been 
                                    offering the ability to directly sync except for two — Salesforce and Microsoft Dynamics. Needless to say many other CRMs, Zoho and Capsule among them, expressed their public disappointment 
                                    of being cut out of LinkedIn’s API.
                                </p>
                                <p>
                                    It seemed that LinkedIn was choosing to prioritize its revenue over an optimal user experience. As a result, Sales teams had to choose between either of these companies to be able to seamlessly 
                                    gather and enter this data, or take on a more manual approach. Since most people have their LinkedIn profile set to public, it allows their profile information to be searchable via search engines 
                                    making it easier for sales professionals to find out some information on prospective customers. However, more often than not this information is limited in its use on its own.
                                </p>
                                <p>
                                    It is not uncommon for a sales person or business development rep to leverage data from LinkedIn by having a LinkedIn premium subscription, as well as buying into the LinkedIn Sales Navigator platform
                                    in order to find prospects and grow their sales pipeline. Apps and services like <a href="https://leadiq.io/">LeadIQ</a> takes this one step further and helps companies and sales teams sync this information 
                                    they find back to their CRM.
                                </p>
                                <p>
                                    With this acquisition, Microsoft Dynamics CRM now positions itself to having access to the full data of 433+ million members data that offers information about corporate organizational charts and can 
                                    help sales teams find potential customers even more, directing them to the right contacts and decision makers within the company.
                                </p>

                                <h3 className="mt-5">Will Microsoft cut off Salesforce?</h3>
                                <p>
                                    I don’t think so. LinkedIn CEO Jeff Weiner has insisted they will keep LinkedIn independent as part of the deal. I believe this means that Salesforce will continue as LinkedIn partner as before. 
                                    It will be important to Microsoft that it retains LinkedIn users and their data as much as forming partnerships with companies like Salesforce who have an expressed interest in the data as well. 
                                    If LinkedIn data were to only be made available to Microsoft users, I’m not certain how many LinkedIn users would choose to stay, let alone keep their profiles up to date.
                                </p>
                                <p>
                                    If they can play their cards right, Microsoft has much to gain. The key is not just on providing the social data, but how it can leverage artificial intelligence to offer predictive sales intelligence 
                                    to its own customers. Salesforce has been bringing talent through its doors for these fields for quite a while now by way of acquiring RelateIQ, PredictionIO, MinHash, TempoAI, and DemandWare. <strong>Overall
                                    this acquisition has been an exciting leap, and a great first step in bringing CRMs to the next level.</strong>
                                </p>
                            </div>
                        </div>

                        <section className="text-center">
                            <p>We're giving away a 7-day FREE trial! Sign up right now!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Mei Siauw"
                            profile="Mei is CEO of LeadIQ" />

                    </div>
                </div>
            </div>
        );
    }
}

export default TheShiftTowardsTheSocialCrm;