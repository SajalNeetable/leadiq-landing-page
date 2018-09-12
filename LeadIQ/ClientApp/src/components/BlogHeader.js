import React from 'react';
import GetFreeLeadsButton from './GetFreeLeadsButton';

class BlogHeader extends React.Component {

    render() {
        return (
            <div>
                <div className="cover">
                    <div className="d-none d-md-block">
                        <img src="/img/cover.jpg" className="img-fluied" />
                    </div>
                    <div className="cover-content">
                        <div className="container">
                            <section>
                                <div className="text-center">
                                    <h1>{this.props.title}</h1>
                                    <h4 className="mt-3">Category: {this.props.category}</h4>
                                    <h5>By {this.props.author}</h5>
                                </div>
                                <div className="mt-3 mb-3">
                                    <hr />
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-6">
                                        <p>{this.props.description}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <img className="img-fluid" src={this.props.imageUrl} alt={this.props.title} />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogHeader;