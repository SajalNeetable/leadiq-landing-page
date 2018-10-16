import React from 'react';
import BlogAuthor from '../components/BlogAuthor';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';

class TheMightyTriangleOfInfluence extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="The Mighty Triangle of Influence"
                    description="When it comes to sales, it is often said that it’s not just one person makes the decision, but a group or team that makes them. Depending on the type and size of the company the makeup of this group can vary greatly. If it’s a small business it might be the owner, the book keeper, maybe even the owner’s spouse."
                    author="Chris Salisbury"
                    date="Aug 26, 2016"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>At a B2B Enterprise level, this group may overlap with several decision makers from a variety of departments looking for a cross-functional solution. Regardless of size, regardless of industry, one thing is for certain — it can get confusing very fast.</p>
                                <p>Early in my career I made it a point to learn all I could about the people who comprise these decision making groups. Learning more about their roles, responsibilities, methodologies and most importantly their needs has allowed me to connect and effectively communicate what solutions I have for their problems.</p>
                                <p>
                                    These groups typically are comprised of a mix of technical, financial and leadership roles who are all responsible for several projects all at once. The bigger the company, the more projects they have happening.
                                    Each of these decision makers come at it from different viewpoints and can perceive different priorities from each other, or maybe interpret a project’s importance differently. So how can you get such diverse outlooks
                                    to come to a mutual decision for a solution? <strong>I call it the Triangle of Influence.</strong>
                                </p>
                                <p>I like to use a lot of shapes and symbols to help visualize and communicate ideas, so imagine a triangle. At the top point, we have the <strong>financial </strong>decision maker, who manages the budget.</p>
                                <p>At one other point we have the <strong>technical/operations</strong> decision maker, who will ultimately be implementing the service or solution throughout the company.</p>
                                <p>The third point is the <strong>user</strong> decision maker, who needs to make sure that the product will benefit and be usable by the employees while purposely advancing the company goals through its use.</p>

                                <div>
                                    <img src="img/triangle.png" alt="triangle" />
                                </div>

                                <p>
                                    This trio of decision makers are the ones who will ultimately decide if your product/service/whatever is a good fit for their company, so you need to make certain to understand each of their needs, answer their questions
                                    and ultimately facilitate conversations so that they all can agree that there is a problem, and your services are the solution.
                                </p>

                                <h4 className="mt-3">Let’s use LeadIQ as example. This is how they target for their triangle of influence:</h4>
                                <p><strong>Operations:</strong> This is typically a Salesforce Administrator, Sales Operations Admin, or CRM Manager. These are the people that will have to implement and train staff on LeadIQ.</p>
                                <p><strong>Financial:</strong> This is typically a VP of Sales, VP of Business Development, or at smaller companies,COO, CRO, Chief Revenue, or CEO. These are the people they will figure out pricing, contract length</p>
                                <p><strong>User:</strong> This is usually a Sales Development Rep, Lead Development Rep, Account Executive, or Business Development Rep. These are the info gatherers that will decide how well the product fits their needs.</p>

                                <p>This is an example of the Triangle of Influence at a small startup in Boston. All three of these members are key to making a decision about vendors.</p>
                                <p>
                                    When speaking with your Triangle of Influence, it’s best to continuously make sure they are all on the same page and understand the same information together. Ultimately these decision makers need to be in lock step 
                                    when solving the problem, and it is your responsibility to make certain they are. By being able to quickly identify all players at the table, it allows you to have more clear communication with all involved and close 
                                    a deal faster than had you relied on only one decision maker.
                                </p>

                                <h3 className="mt-3"><strong>A few guidelines:</strong></h3>
                                <p><strong>1. Never CC the highest ranking person on an email. This may imply you are trying to tattle on them for not considering you.</strong></p>
                                <p><strong>2. Address the group in your email copy. Don’t write to just one person.</strong></p>
                                <p><strong>3. If they don’t respond, follow up with all three. If that doesn’t work, maybe you’re target isn’t the right part of the influence triangle.</strong></p>
                                <p>
                                    The best way to find the right members of your Triangle of Influence it ask your customers who was involved in the decision. This will give you a good idea of who needs to be reached out to. It’s also one of the many 
                                    benefits of getting one company’s competitor before prospecting that account. Often times, similar companies are structured the same way.
                               </p>
                                <p>Have examples of who typically is in your Triangle of Influence? Comment below.</p>
                                <p>This post first appeared on our <a href="https://blog.leadiq.com/the-mighty-triangle-of-influence-55e0d6aea398#.681kn5gpc">Medium Publication.</a></p>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>We're giving away a 7-day FREE trial! Sign up right now!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Chris Salisbury"
                            imageUrl="/img/chris-salisbury.png"
                            profile="Chris Salisbury is the founder of the FastGrowth Company." />

                    </div>
                </div>
            </div>
        );
    }
}

export default TheMightyTriangleOfInfluence;