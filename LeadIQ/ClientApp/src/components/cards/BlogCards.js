import React from 'react';
import { Link } from "react-router-dom";

class BlogCards extends React.Component {
    render() {
        return (
            <div className={this.props.blogs.mainCls}>
                {this.props.blogs.blogData.map((blog, index) => {
                    return (
                        <div className={blog.addCls} key={index}>
                            <Link to={blog.navLink}>
                                <div className="blog-card-design" style={{
                                    backgroundImage: `linear-gradient(-180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(${blog.bgImage})`,
                                }}>
                                    <div className="customer-card-text">
                                        <h3 className="text-white">{blog.title}</h3>
                                        <img src={blog.authorAvatar} style={{ width: "25px" }} className="rounded-circle" alt={blog.author} />
                                        <p className="text-white">{blog.author}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default BlogCards;