import React from 'react';
import BlogAuthor from '../components/BlogAuthor';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';

class BlogTemplate extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="How to identify your teams most effective prospectors"
                    description="It doesn’t matter what you call the role: the sales development rep (SDR), the business development rep (BDR) or the inside sales rep (ISR). In the world of B2B sales."
                    author="Doug Dzina"
                    date="July 5, 2018"
                    category="Prospecting"
                    imageUrl="/img/sports-team.jpg"
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">
                                <h3>If you can measure it, you can improve it</h3>
                                <p>Measuring a sales development rep’s effectiveness matters. If sales organizations aren’t able to distinguish the top performers from the laggards–and tease out the true causal dynamics of the sales process–resources are allocated improperly and opportunities are lost. Valuable leads are handed to the wrong SDRs, needed training goes unnoticed, marketing adjustments are missed, and sales productivity remains low.</p>
                                <p>Why did Bob generate more opportunities for the account executives than Sue last year? Was it due to the quality of the leads he received from marketing, the territory he was assigned or his work ethic? Let’s look at an example below:</p>

                                <br />

                                <div className="row">
                                    <div className="col-md-1" />
                                    <div className="col-md-10">
                                        <div className="card">
                                            <img className="card-img-top" src="/img/cien-value-chain.png" alt="Cien Value Chain" />
                                            <div className="card-body">
                                                <p className="card-text">At first glance, Bob is a higher performer than Sue. However, given the value of the leads he received from marketing and the quality of the prospecting effort from the sales development team, he actually contributed less to the business than Sue.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br /> <br />

                                <p>Most sales teams assumes that the SDRs generating the most revenue are the same ones who are getting the most opportunities. This is not always the case.</p>
                                <p>Historically, SDRs were measured by the total volume of sales signed. Unfortunately, this is still a commonly used indicator of sales performance in many organizations.</p>
                                <p>Many sales managers know this. The problem is that measuring sales performance beyond quota achievement is hard; firms must account for lead, pipeline, human and market factors that come into play. While the data for this operational intelligence is in their CRM systems, it is often incomplete, inaccurate or insufficiently structured. So sales teams tend to measure only a few key performance indicators, and their CRM data is used primarily for forecasting purposes.</p>
                                <p>Getting beyond these simplistic metrics is important for the operational intelligence that businesses need for improved sales productivity. This requires looking at both marketing output and sales output.</p>
                                <p>The best prospector on the team isn’t necessarily the one who created the greatest amount of opportunities, it’s the one who has added the most value to the leads received by the marketing team and the one who’s activities contributed the most to the opportunity creation process.</p>
                                <p>It may be that another SDR appears more productive because they’ve received more valuable leads from marketing, or because they work a territory that has greater demand than another prospector. External market factors such as a local competitor leaving the market might also distort the picture of person’s performance.</p>

                                <h3>Go Beyond the Traditional KPIs</h3>
                                <p>When measuring the effectiveness of a sales development rep, it’s important to go beyond traditional KPIs such as the number of connected calls and the number of sent emails. It’s time to start measuring outcomes rather than activity. In this case, by factoring in the qualitative aspects of a sales professional’s prospecting activity.</p>
                                <p>It’s good to look at the following four factors when measuring the effectiveness of your sales development team.</p>

                                <strong>Professional Attributes</strong>
                                <p>To score professional attributes, look at the level of industry experience, social relationships, rank they occupy in the team, and salary level. A prospector who receives an annual salary of $50,000 a year, for instance, is hardly effective if he generates only $10,000 worth of opportunities. Same applies when making comparisons – you can’t expect someone with six months prospecting experience to perform at the level level as someone with ten years experience.</p>

                                <strong>Individual Behavior</strong>
                                <p>Assessing the fundamental competencies of a prospecting professional requires judging the subjective “charm factor” and traits ranging from haircut to smile. Those shouldn’t be underestimated but you should also look at attributes such as work ethic, closing ability and product knowledge.</p>

                                <strong>Activity Quality</strong>
                                <p>An SDR with good organizational skills but poor writing skills might be less valuable than a slightly less organized rep with great communication skills, so assess along the quality of the prospector’s communication, their use of the proper channels at the right time for prospect interactions, and time spent prospecting versus attending client meetings.</p>

                                <strong>External Factors</strong>
                                <p>A number of factors outside the control of an inside sales rep can have an impact on performance, so it also is worth considering macro factors that could impact the performance of a sales development professional. These can include business cycles and seasonality that affect lead times,market forces and competitive pressures but also team mood and staffing changes such as the departure of a key manager or layoffs.</p>
                                <p>Measuring the effectiveness of a sales person’s prospecting efforts is at the heart of sales productivity optimization, but it requires a comprehensive, qualitative view of each person in the team.</p >
                                <p>To understand these deeper dynamics, many companies are turning to Artificial Intelligence(AI) to measure the incremental value created by their marketing and prospecting activities.Once measured, leaders and teams can make internal changes to unlock their sales productivity.</p >
                            </div>
                        </div>

                        <section className="text-center">
                            <p>Start prospecting better! Get 100 free leads on us.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Doug Dzina"
                            imageUrl="/img/doug-dzina.png"
                            profile="Runs sales and business development at Cien, a new sales productivity app that gives leaders the power of artificial intelligence to increase the effectiveness of their sales teams. Available on the Salesforce AppExchange, Cien takes into account human and behavioral elements to detect problems, predict outcomes and recommend the shortest path to success."/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogTemplate;