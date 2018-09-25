﻿import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import BlogAuthor from '../components/BlogAuthor';

class HowToKeepAProspectWarmWithoutABlanket extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="How to Keep a Prospect Warm (Without a Blanket)"
                    description="You did it!. That C-level prospect you’ve been calling and emailing everyday for the past 3 weeks finally picked up the phone and agreed to a meeting two weeks from now."
                    author="Jon Mazza"
                    date="May 31, 2018"
                    imageUrl="/img/blanket.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>You did everything right. You did your research on the prospect and their company, crafted the perfect pitch, delivered it with confidence and the prospect found enough value to say yes to giving you some time on their busy schedule to learn more.</p>
                                <p>
                                    The time for your meeting is here and you’re really excited for this one. You know your solution is a perfect fit for their organization. You can’t contain yourself,
                                    so you dial into the bridge a few minutes early. The adrenaline is rushing through your body, you start shadow-kickboxing in your office while waiting for the prospect to dial in.
                                 </p>

                                <div className="card blog-card">
                                    <div className="card-body">
                                        <img src="/img/jon-snow.jpg" className="img-fluied" />
                                        <small className="justify-content-center row">Your reaction as your prospects banish you to a frozen wasteland</small>
                                    </div>
                                </div>

                                <p className="mt-3">10 minutes go by, “They must be having trouble with the dial in info. I’ll give them a call”.They don’t pick up. Panic sets in. Where the hell is this person?</p>
                                <p>Time of death, 2:17 pm EST. You call it. With tears in your eyes you send out an email hoping to reschedule for a later date, but now you’re back in a vicious cycle of trying to get that prospect back on the phone.</p>

                                <h3 className="mt-3">What could’ve gone wrong?</h3>
                                <p>
                                    This scenario is all too familiar with those of us in the world of sales. Whether you’re a BDR, SDR, AE or whatever your company calls your role in sales, something like
                                    this has probably happened to you. On average about half of these meetings end up rescheduling. The more times it reschedules the less likely it is to happen all together.
                               </p>

                                <h3 className="mt-5">For those of you who are sick of having your meeting fall through the cracks and your prospects going cold, here’s a few easy pointers to get more of your prospects attending your meetings.</h3>

                                <h3 className="mt-5">Tip #1: Ask them to open their calendar</h3>

                                <p>Have them put in a place holder while you write up the calendar invite with call/meeting instructions.</p>

                                <h3 className="mt-5">Tip #2: Set it in close</h3>

                                <p>Ideally, if you could set it for later in the day you’re almost guaranteed it’ll occur, but if not, within 3 business days and your chances are looking pretty good too. Whatever you do, make sure you set it within 2 weeks. After 2 weeks, the chances it’ll happen on that date go way down.</p>

                                <h3 className="mt-5">Tip #3: After the yes, ask for more time</h3>
                                <p>
                                    It’s important to make sure you let the prospect know that they aren’t off the hook after saying yes to a date/time to you. Thank them for agreeing to meet with you or your rep and then
                                    say something like: “Before I let you go, I have a few questions for you to be sure we make the best use of your time on (date of meeting)”. Make sure after you ask them a couple of questions
                                    to let them know how many more you have, to show that you’re almost done with them. This also leads me to my next point……
                                </p>

                                <h3 className="mt-5">Tip #4: Ask good qualifying questions</h3>
                                <p>
                                    I don’t mean “do you have money or authority to buy my insert product/service here” types of questions. I’m mean figure out what the prospect wants to learn more about.
                                    Ask them what tools they’re currently using. How are they using those tools? What do they like/don’t they like? Have they looked into competitors? Figure out some good
                                    questions that’ll get the prospect into thinking that you know what you’re talking about and maybe they’ll share a lot more with you and start really believing you can help them with their challenges.
                                 </p>
                                <h3 className="mt-5">Tip #5: Use those questions in your calendar invitation</h3>
                                <p>
                                    Your calendar invitation should reference those questions in the body of your calendar invitation. It should look something like: Thank you for taking the time to chat. On (date/time)
                                    we’ll share with you some insights into how you could increase/decrease (insert a product/service value) while (insert another product/service value). Of course, make sure the meeting
                                    room/dial-in info are correct too!
                                 </p>
                                <h3 className="mt-5">Tip #6: If you set the meeting over email, CALL and follow tips 1-4</h3>

                                <p>Doing this let the prospect know how serious you are about helping them.</p>

                                <div className="card blog-card">
                                    <div className="card-body">
                                        <img src="/img/giphy-eat-breakfast.gif" className="img-fluied" />
                                        <small className="justify-content-center row">You after your prospect actually attends a meeting and has an interest in what you’re saying</small>
                                    </div>
                                </div>

                                <h3 className="mt-5">Tip #7: Courtesy call/email/text</h3>

                                <p>If you set out the meeting more than a few days out, you should probably send out some sort of reminder.</p>

                                <p>Not only will your meetings happen more often, you’ll also be setting much more highly qualified meetings and speeding up the entire sales process!</p>

                                <p>
                                    I can understand if after you receive that yes and agree on a date you may feel a little rushed to get off the phone. If you keep the prospect informed of your next steps they’ll be
                                    much more willing to give you some more of their time. Remember, you want to make the best use of everyone’s time, including your own! Make sure to keep everything relatively short so
                                    you don’t overwhelm the prospect or keep you from having time to set more of those high-quality meetings!
                                 </p>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Want to write some cold emails to some fresh leads? Try 100 free leads of LeadIQ.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Jon Mazza"
                            profile="Jon Mazza is a Business Development Specialist at Technology Business Research. He is changing the way people perceive sales by thinking outside the box when it comes to prospecting." />

                    </div>
                </div>
            </div>
        );
    }
}

export default HowToKeepAProspectWarmWithoutABlanket;