import React from 'react';
import FreeLeads from '../components/buttons/FreeLeads';
import BlogCards from '../components/cards/BlogCards';
import blogTemplates from './../data/blogs.json';

class BlogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: blogTemplates
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }


    render() {
        return (
            <div>
                <div>
                    <div className="privacy-Cover">
                        <div className="container prospectHeaderTitle">
                            <section className="pt-5 gettingStarted">
                                <h1 className="text-white text-center  mb-4 fa-2x prospectText"><b>Blog</b></h1>
                                <h4 className="text-white text-center mb-4" style={{ fontWeight: "400" }}>Prospecting doesn’t have to be a challenge. Learn some of the cool things we’ve learned about prospecting.</h4>
                                <div className="justify-content-center d-flex">
                                    <FreeLeads size="lg" />
                                </div>
                            </section>
                        </div>

                    </div>
                    <div className="faq-waveDesign">
                        <img src="/img/wave-four.png" className="img-fluied faq-waveDesignProspect" alt="wave" />
                    </div>
                    <div className="blog-container">
                        <div className="container">
                            <div className="card">
                                <div className="card-body card-blog">
                                    {this.state.blogs.map((blog, index) => { return (<BlogCards blogs={blog} key={index} />) })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogList;