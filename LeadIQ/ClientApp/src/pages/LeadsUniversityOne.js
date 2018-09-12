import React from 'react'; 
import { Link } from "react-router-dom";
import blogReference from "./../data/blogReference.json";

export default class LeadsUniversityOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getBlogDetails: blogReference
        };
    }
    render() {
        return (
            <div className="universityOne">
                <div className="cover">
                    <div className="d-none d-md-block">
                        <img src="/img/leadIq-university-cover.png" className="img-fluied" />
                        <img src="/img/logo-university-white.png" className="leadIqUniversity" />
                    </div>
                </div>
                <div className="container sectionBox">
                    <section className="headerSectionBar">
                        <label className="legendLeadIq"><mark className="highlightText">Why LeadIQ</mark></label>
                        <div className="row mt-5">
                            <div className="col-12 col-xs-1 col-sm-1 col-md-1 col-ls-1 col-xl-1">
                                &nbsp;
                            </div>
                            <div className="col-12 col-xs-3 col-sm-3 col-md-3 col-ls-3 col-xl-3">
                                <img className="justify-content-center d-flex alignCenter" src="/img/why-leadIq.png" />
                            </div>
                            <div className="col-12 col-xs-4 col-sm-4 col-md-4 col-ls-4 col-xl-4">
                                &nbsp;
                            </div>
                            <div className="col-12 col-xs-3 col-sm-3 col-md-3 col-ls-3 col-xl-3">
                                <div><span className="glyphicon glyphicon-one-fine-dot"><label className="list-text">Introduction</label></span></div>
                                <div><span className="glyphicon glyphicon-one-fine-dot"><label className="list-text">Thoughtful prospecting and why you should do it</label></span></div>
                                <div><span className="glyphicon glyphicon-one-fine-dot"><label className="list-text">Database Solution vs LeadIQ</label></span></div>
                            </div>
                            <div className="col-12 col-xs-1 col-sm-1 col-md-1 col-ls-1 col-xl-1">
                                &nbsp;
                            </div>
                            
                        </div>
                    </section>
                    <section>
                        <h3 className="justify-content-left d-flex alignCenter">Introduction</h3>
                        <div className="row">
                            <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-ls-6 col-xl-6">
                                <label>Prospecting is the lifeblood of sales. You need to be prospecting actively to hit your number. 
                                        It’s a fact that most SDRs spend most of their day prospecting. So how do you maximize your time from research, contact list building and outreach? It’s tough.
                                        We know. Apart from being a SaaS company we are also a sales team. And we eat our own dog food - so to say. 
                                        Many SDRs focus on high volume activities like massive data purchases and blasting out cold emails to huge contact lists. 
                                        But you aren’t like most SDRs. You are better than that - insert GIF 
                                </label>
                            </div>
                            <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-ls-6 col-xl-6">
                                <img src="/img/leadIq-cycle.png" className="img-fluied" />
                            </div>
                        </div>
                    </section>
                    <section>
                        <label>
                            Recent stats suggest that 63% of sales reps will never hit their quota, with the number one problem being a lack of deals in the pipeline. 
                            Yet over 84% of executives at companies have purchased something that was first introduced to them via cold outreach.
                            Our jobs as prospectors is quietly super nobel. Every new opportunity that you generate could potentially create anywhere
                            from 1-10+ new jobs depending on your average deal size. We’ve talked to some Sales Development Reps with yearly
                            quotas was over 30x their salary. We’re money makers, but more importantly, we’re building our economy.
                            While some of those stats earlier seem grim, the best prospectors in the entire world can score double digit 
                            response rates with their outreach. They make prospects feel loved, they smash quota goals, but most of all,
                            they feel good about what they do when they wake up in the morning.That’s where we want all prospectors
                            to be. We want to help you get more wins everyday. One activity at a time, we want prospects to hate saying
                            “no” to you. We want to change the stigma that prospecting is a dirty job. That’s why we build LeadIQ, 
                            and why we’re sharing this University.Prospecting shouldn’t be about pressing a bunch 
                            of numbers, making a bunch of dials, and sending emails written by someone else. It should 
                            be about connecting with others, making them feel good, and showing them why you worth their 
                            time, money, and interest.
                        </label>
                        <div className="justify-content-center d-flex mt-5"><img src="http://i.giphy.com/1S6xghiGMc6Hu.gif" /></div>
                        <label>
                            Today with the combination of your LeadIQ account, our content, and your brain, we’re going
                            to help you conquer the world. We want to help you feel good about your prospecting, and as
                            a result get more deals. Let’s jump in, shall we. Are you ready?
                        </label>
                    </section>
                    <section>
                        <h3 className="justify-content-left d-flex alignCenter mb-3">Prospecting is all about research first.</h3>
                        <label>
                            Mass messaging doesn’t work. So mass prospecting won’t work either. Your prospects are
                            people and they have needs to meet in their organization, whether its to hit a revenue
                            goal, align teams, save money.
                        </label>
                        <div className="embed-responsive embed-responsive-16by9 mt-4 justify-content-center d-flex">
                            <iframe className="embed-responsive-item" src="https://fast.wistia.net/embed/iframe/nzb9witd22" allowfullscreen></iframe>
                        </div>
                    </section>
                    <section>
                        <h3 className="justify-content-left d-flex alignCenter mb-3">What is account based prospecting?</h3>
                        <label className="mt-4">I’m going to assume most of you already do this, but just as a quick refresher,
                            Account-based prospecting is the reverse of prospecting to a large pool of prospects.
                            It’s when you find the best companies to go after prior to reaching out to employees at
                            that company.
                        </label>
                        <label className="mb-3">LinkedIn is a good place to start to filter those account-based factors. If you don’t already have a
                            LinkedIn Sales Navigator account it will definitely make your job so much easier.
                            Once you have your ideal company list figured out you can research for your ideal contact inside that company.
                        </label>
                        <div className="alignCenter mb-3"><img src="/img/screenshot-1.png" className="img-fluied" /></div>
                        <h3 className="justify-content-left d-flex alignCenter mb-3">What is Thoughtful Prospecting?</h3>
                        <label className="mt-4">
                            If you are implementing research first prospecting you are practicing thoughtful prospecting. Awesome job. It’s surprising that sales teams are still pulling large amounts of data to send out mass email campaigns or picking up the phone to dial a prospect without knowing anything other than their contact information.
                            There is no substitute for research. Not ever. No matter how cool you think a new sales prospecting tool is to maximize your impact on outreach you need to research your prospects individually not en masse.
                        </label>
                    </section>
                    <section>
                        <h3 className="justify-content-left d-flex alignCenter mb-3">Database Solution vs LeadIQ</h3>
                        <label className="mt-4">
                            There are plenty of sales prospecting tools to pick from. Some teams from a data perspective may 
                            even be using more than one source for data. A good way to think about Database solutions vs.
                            LeadIQ is sort of like a fish market vs. a fishing rod.At a fish market, you buy fish.
                            With database solutions, you are buying access to a large library of contacts.Using this metaphor, 
                            when you buy LeadIQ, you are buying a fishing rod to find leads.LeadIQ makes it easy for you find out the
                            contact information for your leads in real time. All you have to do is find your prospect online somewhere.
                            If you give us the first name, last name, and company name, we can enrich them with contact data.Purchasing
                            from a B2B database and using a prospecting tool has pros and cons, here they are:
                        </label>
                        <div className="row mt-5">
                            <div className="col-12 col-xs-2 col-sm-2 col-md-2 col-ls-2 col-xl-2 mb-3">
                                &nbsp;
                            </div>
                            <div className="col-12 col-xs-8 col-sm-8 col-md-8 col-ls-8 col-xl-8 mb-3">
                                <div className="mt-5"><img src="/img/pros-cons.png" className="img-fluied" /></div>
                                <label className="mt-5">
                                    LeadIQ gets its data from publicly available resources. Typically database solutions 
                                    will collect data that sits stale for months or even years. When you pull data in real
                                    time you get the most up to date contact information. Depending on your prospecting activities
                                    accurate data is going to save you time and lots of energy. Why pull 1k contacts with a 30% bounce
                                    rate when you can find 800 contacts with a 5% bounce rate.  You also aren’t spamming your servers
                                    with a bunch of bounces.
                                </label>
                                <div className="embed-responsive embed-responsive-16by9 mt-4 justify-content-center d-flex">
                                    <iframe className="embed-responsive-item" src="https://fast.wistia.net/embed/iframe/nzb9witd22" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="col-12 col-xs-2 col-sm-2 col-md-2 col-ls-2 col-xl-2 mb-3">
                                &nbsp;
                            </div>
                        </div>
                    </section>
                    <section className="blogReferenced">
                        <div className="">
                            <h3 className="justify-content-center d-flex alignCenter"> <mark className="highlightText">Blogs referenced here:</mark></h3>

                            {
                                this.state.getBlogDetails.map((blog) => {
                                    return (
                                        <div>
                                            <div className="row mt-5 blogSection">
                                                <div className="col-12 col-xs-4 col-sm-4 col-md-4 col-ls-4 col-xl-4">
                                                    <img src={blog.imageUrl} className="img-fluied" alt={blog.title} />
                                                </div>
                                                <div className="col-12 col-xs-8 col-sm-8 col-md-8 col-ls-8 col-xl-8">
                                                    <label>
                                                        {blog.description}
                                                    </label>
                                                </div>
                                                <div className="row mt-5">
                                                    <img src={blog.leadIqIcon} className="col-4 col-xs-2 col-sm-2 col-md-2 col-ls-2 col-xl-2 mb-3" alt={blog.title} />
                                                    <h6 className="justify-content-left d-flex alignCenter col-3 col-xs-1 col-sm-1 col-md-1 col-ls-1 col-xl-1 mb-3">{blog.leadIqTitle}</h6>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    );
                                })
                            }

                        </div>
                    </section>
                </div>

                <div className="container">
                    <section className="">
                        <div className="prospectList">
                        <label>Lesson 2</label>
                            <h3 className="justify-content-left d-flex alignCenter mt-5">Building a Prospecting List</h3>
                            <label className="mt-3">
                                Build your prospecting list with laser like precision. Learn the art of researching
                                and identifying the right prospects to contact.
                            </label>
                            <Link className="" to="/" >Next Lesson</Link> 
                        </div>
                        
                    </section>
                </div>
            </div>
        );
    }
}