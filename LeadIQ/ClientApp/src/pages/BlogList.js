import React from 'react';
import FreeLeads from '../components/buttons/FreeLeads';
import BlogCards from '../components/cards/BlogCards';
import blogTemplates from './../data/path.json';
import { Link } from 'react-router-dom';

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
                                    <div className="row">
                                    {this.state.blogs.map((blog, index) => {
                                            return (
                                                <div className="col-md-6 col-lg-6 pt-3 pb-3" key={index}>
                                                <Link to={blog.navLink}>
                                                    <div className="blog-card-design" style={{
                                                        backgroundImage: `linear-gradient(-180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(${blog.BackgroundImage})`,
                                                    }}>
                                                        <div className="customer-card-text">
                                                            <h3 className="text-white">{blog.Title}</h3>
                                                            <img src={blog.AuthorImage} style={{ width: "25px" }} className="rounded-circle" alt={blog.Author} />
                                                            <p className="text-white">{blog.Author}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                    </div>
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