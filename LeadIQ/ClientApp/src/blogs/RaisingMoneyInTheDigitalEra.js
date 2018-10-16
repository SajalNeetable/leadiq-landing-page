import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import BlogAuthor from '../components/BlogAuthor';

class RaisingMoneyInTheDigitalEra extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="Raising Money in the Digital Era"
                    description="In 2016, we LIVE on the internet. We shop on Amazon Prime and have it delivered within 2 hours. We keep up with our childhood friends and grandparents on Facebook. We book travel, find dates, gamble, listen to music, research anything, bank, manage insurance, and just about everything else through online channels. We are learning everyday how to use digital tools in more ways, as they make life more efficient."
                    author="Jason Fishman"
                    date="Jul 15, 2016"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <h3>So why wouldn’t you prospect for investors online as well?</h3>
                                <p>
                                    Let’s be honest, the fundraising process is historically difficult, extensive, and is commonly unsuccessful. Beyond the tasks of creating a viable business model, plan, and powerpoint presentation 
                                    (not even focusing on an Operating Agreement, PPM, Subscription Agreement, etc, etc), the unfunded new team has to find investor prospects. Early stage companies generally can’t get the help of expensive 
                                    and busy investment banks even if they wanted to or could afford them.
                                </p>
                                <p>Beyond the team’s personal network… friends, family, business acquaintances, acquaintances of acquaintances… where does an entrepreneur turn? What tools can support?</p>
                                <p>We’ve got great news for startup folks.  Investors are online! Not only are they looking at trend reports and seeking deal flow, they are being tracked across all of the sites they visit, creating data that is accessible for marketing campaigns. Most importantly, investors are using email,the #1 most effective digital marketing channel.</p>
                                <p>
                                    Overseeing the digital strategy for <a href="http://digitalnicheagency.com/">DNA</a> , I work with a lot of startups here in Silicon Beach looking to raise capital. On behalf of clients, we have seen very strong success from 3rd party email data to 
                                    identify and engage Accredited investors. There is literally info on everyone online and it can be used to find very specific, very targeted audiences for marketing purposes.
                                </p>

                                <h3 className="mt-5">Here are our top 10 steps for building an effective email outreach campaign…</h3>
                                <ol>1. <strong>Use a database</strong> to find strategic accredited investors in your vertical</ol>
                                <ol>2. <strong>Pull 1k+ contacts</strong> per month for email outreach, to create a large enough sample size.</ol>
                                <ol>3. <strong>Draft a sequence of 4-8 emails</strong> to a prospective investors to setup a meeting/call. First email should sell, but be simple enough to be read… 5 mini paragraphs max. Next couple emails can be brief and remind of value prop to investor. Unanswered emails from that point should be 1-2 sentences to setup a call.</ol>
                                <ol>4. <strong>Setup a CRM</strong> to uphold a very structured process, you’ll need it.</ol>
                                <ol>5. <strong>Send out 1-2 emails of your sequence per week</strong> to your prospective email list. This can be done with an Email Automation Software or even blasted with personalization through Google’s Mail Merge.</ol>
                                <ol>6. <strong>Be prepared</strong> for uninterested parties and have a matrix of rebuttals ready. You only need a small percentage of recipients to turn into a meeting, so don’t sweat the majority that are not – it should be anticipated.</ol>
                                <ol>7. Have a <strong>calendar scheduling</strong> platform to make calls easy on investor groups and fill your schedule</ol>
                                <ol>8. Begin taking interested groups through your <strong>investor sales process</strong> and stay very organized, as your process may require real volume and diligent follow-ups.</ol>
                                <ol>9. Optimize each step of the puzzle and repeat</ol>
                                <ol>10. Lastly, make sure to <strong>test and scale</strong> email targeting/formats and all marketing channels throughout your process. Do not feel limited by your personal network; start there – then hustle over email to hit the right investors to close out your round.</ol>

                                <p>You can also reverse the numbering. Starting at 9 and working your way to 1, the most important.</p>
                                <p>The process is focused on quality, but don’t forget this is sales and a numbers game at that…</p>

                                <p className="mt-3">Lastly, make sure to <strong>test and scale</strong> email targeting/formats and all marketing channels throughout your process. Do not feel limited by your personal network; start there – then hustle over email to hit the right investors to close out your round.</p>


                            </div>
                        </div>

                        <section className="text-center">
                            <p>We're giving away a 7-day FREE trial! Sign up right now!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Jason Fishman"
                            imageUrl="/img/jason-fishman.png" />


                    </div>
                </div>
            </div>
        );
    }
}

export default RaisingMoneyInTheDigitalEra;