import React from 'react';
import { Link } from "react-router-dom";

class BlogCards extends React.Component {
    render() {
        return (
            <div className="col-md-6 col-lg-6 pt-3 pb-3">
                <Link to={this.props.blog.navLink}>
                    <div className="blog-card-design" style={{
                        backgroundImage: `linear-gradient(-180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(${this.props.blog.BackgroundImage})`,
                    }}>
                        <div className="customer-card-text">
                            <h3 className="text-white">{this.props.blog.Title}</h3>
                            <img src={this.props.blog.AuthorImage} style={{ width: "25px" }} className="rounded-circle" alt={this.props.blog.Author} />
                            <p className="text-white">{this.props.blog.Author}</p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default BlogCards;