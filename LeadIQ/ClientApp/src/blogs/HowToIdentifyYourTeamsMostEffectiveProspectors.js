import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import BlogAuthor from '../components/BlogAuthor';

class HowToIdentifyYourTeamsMostEffectiveProspectors extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="How to Identify your Team’s Most Effective Prospectors"
                    description="It doesn’t matter what you call the role: the sales development rep (SDR), the business development rep (BDR) or the inside sales rep (ISR). In the world of B2B sales"
                    author="Doug Dzina"
                    date="Jul 5, 2018"
                    imageUrl="/img/prospectors-team.jpg"
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>prospecting is often defined as the art and science of contacting leads or target accounts in hopes of creating opportunities for account executives. And when it comes to prospecting, few would disagree that it’s a numbers game. The question is, what numbers do you look at?</p>

                                <p>TL;DR: Measuring a prospector’s effectiveness requires a comprehensive, qualitative comparison of each person in the team.</p>

                                <h3>If you can measure it, you can improve it</h3>

                                <div className="card blog-card">
                                    <div className="card-body">
                                        <img src="/img/cien-value-chain.png" className="img-fluied" />
                                        <small className="justify-content-center row">At first glance, Bob is a higher performer than Sue. However, given the value of the leads he received from marketing and the quality of the prospecting effort from the sales development team, he actually contributed less to the business than Sue.</small>
                                    </div>
                                </div>

                                <p className="mt-3">Most sales teams assumes that the SDRs generating the most revenue are the same ones who are getting the most opportunities. This is not always the case.</p>

                                <p>Historically, SDRs were measured by the total volume of sales signed. Unfortunately, this is still a commonly used indicator of sales performance in many organizations.</p>

                                <p>
                                    Many sales managers know this. The problem is that measuring sales performance beyond quota achievement is hard; firms must account for lead, pipeline, human and market factors
                                    that come into play. While the data for this operational intelligence is in their CRM systems, it is often incomplete, inaccurate or insufficiently structured. So sales teams tend
                                    to measure only a few key performance indicators, and their CRM data is used primarily for forecasting purposes.
                               </p>
                                <p>Getting beyond these simplistic metrics is important for the operational intelligence that businesses need for improved sales productivity. This requires looking at both marketing output and sales output.</p>

                                <p>
                                    The best prospector on the team isn’t necessarily the one who created the greatest amount of opportunities, it’s the one who has added the most value to the leads received by the marketing
                                    team and the one who’s activities contributed the most to the opportunity creation process.
                                 </p>

                                <p>It may be that another SDR appears more productive because they’ve received more valuable leads from marketing, or because they work a territory that has greater demand than another prospector. External market factors such as a local competitor leaving the market might also distort the picture of person’s performance.</p>

                                <h3>Go Beyond the Traditional KPIs</h3>

                                <p>When measuring the effectiveness of a sales development rep, it’s important to go beyond traditional KPIs such as the number of connected calls and the number of sent emails. It’s time to start measuring outcomes rather than activity. In this case, by factoring in the qualitative aspects of a sales professional’s prospecting activity.</p>

                                <p>It’s good to look at the following four factors when measuring the effectiveness of your sales development team.</p>

                                <strong><li>Professional Attributes</li></strong>

                                <p>
                                    To score professional attributes, look at the level of industry experience, social relationships, rank they occupy in the team, and salary level. A prospector who receives an annual salary
                                    of $50,000 a year, for instance, is hardly effective if he generates only $10,000 worth of opportunities. Same applies when making comparisons – you can’t expect someone with six months prospecting
                                    experience to perform at the level level as someone with ten years experience.
                                </p>

                                <strong><li>Individual Behavior</li></strong>

                                <p>Assessing the fundamental competencies of a prospecting professional requires judging the subjective “charm factor” and traits ranging from haircut to smile. Those shouldn’t be underestimated but you should also look at attributes such as work ethic, closing ability and product knowledge.</p>

                                <strong><li>Activity Quality</li></strong>

                                <p>An SDR with good organizational skills but poor writing skills might be less valuable than a slightly less organized rep with great communication skills, so assess along the quality of the prospector’s communication, their use of the proper channels at the right time for prospect interactions, and time spent prospecting versus attending client meetings.</p>

                                <strong><li>External Factors</li></strong>
                                <p>A number of factors outside the control of an inside sales rep can have an impact on performance, so it also is worth considering macro factors that could impact the performance of a sales development professional. These can include business cycles and seasonality that affect lead times,market forces and competitive pressures but also team mood and staffing changes such as the departure of a key manager or layoffs.</p>

                                <p>Measuring the effectiveness of a sales person’s prospecting efforts is at the heart of sales productivity optimization, but it requires a comprehensive, qualitative view of each person in the team.</p >

                                <p>To understand these deeper dynamics, many companies are turning to <a href="https://www.cien.ai/study-future-of-sales-and-ai/">Artificial Intelligence(AI) </a>to measure the incremental value created by their marketing and prospecting activities.Once measured, leaders and teams can make internal changes to unlock their sales productivity.</p >

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Send some great cold emails to 100 free leads.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Doug Dzina"
                            imageUrl="/img/doug-dzina.png"
                            profile="Runs sales and business development at Cien, a new sales productivity app that gives leaders the power of artificial intelligence to increase the effectiveness of their sales teams. Available on the Salesforce AppExchange, Cien takes into account human and behavioral elements to detect problems, predict outcomes and recommend the shortest path to success." />

                    </div>
                </div>
            </div>

        );
    }
}

export default HowToIdentifyYourTeamsMostEffectiveProspectors;