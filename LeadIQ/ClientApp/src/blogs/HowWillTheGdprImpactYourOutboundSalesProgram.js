import React from 'react';
import BlogAuthor from '../components/BlogAuthor';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';

class HowWillTheGdprImpactYourOutboundSalesProgram extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="How will the GDPR impact your outbound sales program"
                    author="Mei Siauw"
                    date="Apr 30, 2018"
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <i><span>Disclaimer: This blog is intended for informational purposes only, and is not intended to constitute legal advice. You should consult with your legal counsel to fully understand how the GDPR impacts you and your business.</span></i>

                                <p className="mt-3">Unless you’ve been living off the grid, it’s pretty hard to not hear anything about GDPR these days. Working at a company that helps companies find and manage their contact data, we naturally have a lot of customers asking us about GDPR. </p>

                                <p>Some of the most common questions that come up include,<em><strong>“What is GDPR?” </strong></em>How do I become GDPR compliant?” “Do I have to worry about GDPR?” <strong>So we decided to write a quick blog posts on how it will impact you and LeadIQ customers. </strong></p>

                                <h3 className="mt-5">What is GDPR?</h3>

                                <p>The General Data Protection Regulation (GDPR), is a new data privacy regulation in the European Union (EU) which goes into effect on May 25, 2018. The GDPR provides new standards across the EU to bolster and protect the privacy right of EU citizens.</p>

                                <p>The GDPR applies to you if your company is located within the EU, if you are doing business in the EU, or if you are collecting personally identifiable information (“PII”) from EU citizens in the EU and abroad. The GDPR will change the way you do business.</p>

                                <h3 className="mt-3">The GDPR lists 6 lawful grounds for processing personal data:</h3>
                                <ol> 1. Consent from the person</ol>
                                <ol> 2. A contract with the person</ol>
                                <ol> 3. Compliance with a legal obligation</ol>
                                <ol> 4. Protection of vital interests (on life or death situation)</ol>
                                <ol> 5. A public tasks (by public authorities)</ol>
                                <ol> 6. Legitimate interests (when a private sector organization has a genuine or legitimate interests such as commercial benefit to process without consent, provided that it does not outweigh the interests of the data subjects)</ol>

                                <p className="mt-3">Per Recital 47 of the GDPR, the processing of personal data for direct marketing purposes may be regarded as carried out for a legitimate interest. However, you do need to consider if your marketing purposes could be outweighed by the interests and rights of the data subjects.</p>

                                <div className="text-center mt-3">
                                    <img src="/img/europelitup.jpg" className="img-fluied"/>
                                </div>

                                <p className="mt-3">
                                    If you obtain data not directly from the data subject (such as in the case of you using LeadIQ to search for lead information), you need to provide notice to the data subjects that you have their data in the first communication,
                                    and allow them to opt-out easily. The notice needs to provide information that includes who you are, what are you using the data for, where the data originates from, and giving the person the right to correct, erase, or withdraw
                                    their consent. You can provide the notice the first time you are contacting the person (but no later than one month after you obtain the data).
                                </p>

                                <p>If the data subject exercises their rights to opt-out and have their data corrected, or deleted, you are obligated to respect the rights of the data subjects. LeadIQ is building features to provide tools that will assist you with maintaining opt-outs for EU citizens.</p>

                                <h3 className="mt-5">How does LeadIQ assist you with maintaining opt-outs.</h3>

                                <p>
                                    LeadIQ helps you to search for lead information in real time. We process business contact information such as name, job title, company, email address, phone number, etc. The information that we provide is typically found on
                                    public professional profiles, business cards, or email signatures. We do not process any sensitive personal information such as racial or ethnic origin, political opinions, religious or philosophical beliefs, health information,
                                    genetic or biometric data, etc.
                                </p>

                                <p>
                                    If you use LeadIQ to search for leads, LeadIQ provides an opt-out form that you can include in your communications with the leads. By using our opt-out form, we will help you track people that have requested an opt-out from
                                    any sales/marketing emails that have been sent by you. This opt-out form allows them to inquire on how their data was originated and allows them to erase any data collected. When someone has opted out, LeadIQ will remove their
                                    data and suppress any related data or PII for that person within the LeadIQ system. LeadIQ will proactively maintain a suppression list to ensure that their rights are respected. LeadIQ users in your organization can also directly
                                    (even proactively) add, edit, and maintain this suppression list, if you do not want to have your customers go through the form.
                                </p>

                                <p>
                                    Here’s an <a href="https://privacy-central.typeform.com/to/CIZlgP?team=xxxxx">example</a> of LeadIQ’s opt-out form. IMPORTANT NOTE: the link shows an example. Please email us at support@leadiq.com to get your team’s opt-out page set up.
                                    We highly recommend you to add this opt-out form on your privacy policy that’s linked from your team’s outbound email to ensure that the right of the data subject is respected.
                                </p>

                                <h3 className="mt-5">Data Processing Agreement</h3>

                                <p>
                                    We want all of our customers to rest easy in knowing that we’ll process any PII submitted in a responsible manner. When you use LeadIQ to search, organize, and store lead information, we act as your data processor.
                                    There you will need to execute a Data Processing Agreement with us. You can contact support@leadiq.com to execute a Data Processing Agreement with us.
                                </p>

                                <p>If you have any questions regarding GDPR and LeadIQ, please contact us at <a href="mailto:support@leadiq.com">support@leadiq.com</a></p>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Get 100 free leads.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <BlogAuthor
                            author="Mei Siauw"
                            profile="Mei Siauw is the co-founder and CEO fo LeadIQ. Prior to leading the team at LeadIQ, Mei spent over a decade working as a Product Manager at Oracle." />
                    </div>
                </div>
            </div>
        );
    }
}

export default HowWillTheGdprImpactYourOutboundSalesProgram;