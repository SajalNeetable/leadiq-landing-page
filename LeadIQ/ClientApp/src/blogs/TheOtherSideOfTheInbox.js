import React from 'react';
import BlogAuthor from '../components/BlogAuthor';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';

class TheOtherSideOfTheInbox extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="The Other Side of The Inbox"
                    description="Sending an email is simple. Everyone has the tools to spray and pray, blasting out “personalized” email to lists of people. Let’s be real, using a merge tag to add someone’s first name isn’t personalizing anything."
                    author="Shane Rice"
                    date="Jul 15, 2016"
                    imageUrl="/img/SalesDevelopmentReps.png"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-center mt-3">
                                    <iframe src="https://www.youtube.com/embed/xkW_ZkMtmlQ" title="video" scrolling="no" />
                                </div>

                                <p><em>Sending mail merged emails will only get you so far. Being too self-serving will make you like Ned Ryerson from Groundhog Day.</em></p>
                                <h3>I work in marketing at<a href="https://postmarkapp.com/"> Postmark</a>, and ad platforms email me all the time about running campaigns through their service.</h3>
                                <p>The best pitches don’t get responses because you used my first name and company name; the best pitches get down to business and spell out how the sender can help me. The worst emails leave a lot to be desired.</p>
                                <p>Two examples stand out in my mind, each one representing an opposite side of the effective outreach spectrum.</p>

                                <h3 className="mt-5">Here’s the first email:</h3>
                                <strong><em>Hello,</em></strong>
                                <strong><em>I’m looking to get in touch with the person who oversees marketing. Could you point me in the right direction? I’d like to get in touch regarding an opportunity to partner with Company X.</em></strong>
                                <p>With enough volume, I’m sure this email will convert conversations for someone to say it’s effective. But it doesn’t offer me anything meaningful. It’s vague and fails to show the sender is providing any real value.</p>
                                <p>When I get an email offering a “partnership,” it sets a little red flag flying in my head. Whether it’s to sell a product or ask for a link, offers like this usually end up only benefiting the sender.</p>
                                <strong>This message will sit in my archive forever, without a response.</strong>

                                <div className="embed-responsive embed-responsive-16by9 text-center mt-3">
                                    <iframe scrolling="no" src="https://giphy.com/embed/DViGV8rfVjw6Q" title="video" />
                                </div>
                                <p>Contrast that first email with this one from my friend Trevor at <a href="https://www.buysellads.com/">BSA</a>:</p>
                                <p><strong><em>Hi Shane,</em></strong></p>
                                <p><strong><em>I wanted to reach out to see if you’re interested in setting up an intro call to see if it might make sense for us to work on a lead generating campaign or two for Wildbit’s products for Q4 2015.</em></strong></p>
                                <p><strong>Any availability later this week?</strong></p>
                                <p><strong><em>I work Pacific time business hours so any time after about 11 am on the East coast would have me in a workable state of mind. ????</em></strong></p>
                                <p><strong><em>Trevor</em></strong></p>

                                <p>I didn’t know Trevor before he sent me this email, but I replied and set up a call. He offered me a solution to a problem, and I felt like he’d put thought into this specific email. Even if it’s part of a snippet he uses regularly, it still focuses on what his company can offer mine.</p>

                                <h3 className="mt-3">Here are five things to remember before you send that next cold email.</h3>
                                <ol>1. You’re asking for this person’s time. Get to the point and focus on how you can solve their problem.</ol>
                                <ol>2. Get their company name and other details right.</ol>
                                <ol>3. Don’t waste time saying “We’re the leader in…” People see through this plea to authority and it’s a quick way to filter out noisy messages. If you offer a clear solution to a problem people are having, they’ll find out about your company.</ol>
                                <ol>4. As important as it is to be personal, it’s equally as important to be personable. Show the recipient you’ve thought about how you can help them specifically.</ol>
                                <ol>5. Be specific about next steps and include a few windows where you’re available. You can take this a step further and add a link to a service like <a href="https://calendly.com/">Calendly</a> to save time setting up meetings.</ol>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>We're giving away a 7-day FREE trial! Sign up right now!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Shane Rice"
                            imageUrl="/img/shane-rice.png" />
                    </div>
                </div>
            </div >
        );
    }
}

export default TheOtherSideOfTheInbox;