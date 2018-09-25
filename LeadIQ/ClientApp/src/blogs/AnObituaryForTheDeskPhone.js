import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class AnObituaryForTheDeskPhone extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="An Obituary for the Desk Phone"
                    description="The business community lost a giant among office items, a staple in the sales community, and true friend. At the ripe age of 141 years, the desk phone passed quietly into the night Sunday evening. Surrounded by receptionists, sales reps, and loved ones, the desk phone lost its long battle with mobile phones."
                    author="Ryan O’Hara"
                    date="Jul 30, 2018"
                    imageUrl="/img/black-and-white-phone.jpg"
                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">
                                <div className="text-center">
                                    <img src="/img/black-and-white-phone.jpg" className="img-fluied" /></div><br />

                                <p className="mt-3">
                                    Born in early 1876, for the first century of its life, the desk phones helped businesses communicate faster internally between different locations.
                                    Whether it was a train conductor calling a station across the country to give them an estimated time of arrival, or an office notifying another office of a shipment,
                                    the desk phone dramatically changed the speed of business. It was nearly a century later however, when desk phones changed the sales world forever.
                                </p>

                                <p>In the 1940s, it started to become standard for modern offices to equip employees with telephones on their desk. As buyers became connected to the outside world via
                                   their desk telephone, sales reps began calling desk phones as destinations for their cold calls. Prospecting was never the same again.
                                </p>

                                <p>In places like the United States, 10 digits at a time, cold calling invaded sales teams lives everywhere throughout the next 5 decades. It quickly became one of the best ways to prospect.</p>

                                <h3 className="mt-5">There is an old quote that can help describe the later part of the desk phone’s life:</h3>

                                <p>You either die a hero, or live long enough to see yourself become the villain.</p>

                                <p>
                                    As sales reps began having success with the desk phone, executives realized hiring gatekeepers to filter out prospectors was an investment worth having. By the 1990s,
                                    most executives at midsize companies had receptionists and assistants handling their phone calls.
                                </p>

                                <div className="text-center">
                                    <img src="/img/boardwalk-phone.jpg" className="img-fluied" />
                                </div>

                                <p className="mt-3">
                                    Executive Assistant hiring increased drastically, and as a result inversely direct desk phone connect rates decreased. Hardware to purchase PBX systems and VOIP
                                    phones began reeking havoc on IT teams budgets everywhere. Auto gatekeeping technology made cold calling a desk phone even more difficult. The past few years were
                                    really tough for desk phones everywhere.
                                </p>

                                <div className="text-center">
                                    <img src="/img/bench-black-and-white.jpg" className="img-fluied" />
                                </div>

                                <p className="mt-3">
                                    The desk phone was socializer. Sometimes sharing the same phone number with several contacts at a company over the span of 5-10 years.
                                    It didn’t care that Bonny had moved over to HR, Steve changed his desk and phone number with it, or that Jim had left for another company. The phone number
                                    was still going to dial, and what happened on the other end was just pure destiny.
                                </p>

                                <p>The desk phone enjoyed laughing, listening to buyers record their voicemail greetings, the lack of caller ID, and the occasionally really long conference call.</p>

                                <p>
                                    It is survived however by sales reps, support lines, and and its beautiful daughter, the mobile phone. With extreme portability,  the mobile phone has managed to keep IT budgets in
                                    check, avoid phone tree systems, and skip the great relationship the desk phone had with gatekeepers. Considering that cell phones are in most executives’ pockets, the desk phone was
                                    always really proud of its child.
                                </p>

                                <div className="text-center">
                                    <img src="/img/family-photo.jpg" className="img-fluied" />
                                </div>

                                <p className="mt-3">Memorial services will be held via a rep blocking off some time on it’s calendar to do some cold calls today at 4PM ET. In lieu of flowers,
                                    please capture 100 free leads with LeadIQ, and honor the desk phone by calling the mobile direct dials LeadIQ supplies. Its legacy will live on forever.
                                </p>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Honor the desk phone with 100 free leads.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />
                    </div>
                </div>
            </div>
        );
    }
}

export default AnObituaryForTheDeskPhone;