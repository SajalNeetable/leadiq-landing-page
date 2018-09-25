import React from 'react';
import categories from "./../data/categories.json";
import { Link } from "react-router-dom";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryData: categories
        };
    }
    render() {
        return (
            <div>
                <div className="cover">
                    <div className="d-none d-md-block">
                        <img src="/img/category-cover.png" className="img-fluied" />
                        <img src="/img/logo-university-white.png" className="leadIqIcon" />
                    </div>
                </div>
                <div className="container mt-4 mb-4">
                    {
                        this.state.categoryData.map((category) => {
                            return (
                                <div className="row mt-3">
                                    <div className=" col-md-3 col-ls-3 col-xl-3 mb-3">
                                        <img src={category.imageUrl} alt={category.title} className="img-fluied" />
                                    </div>
                                    <div className="col-md-6 col-ls-6 col-xl-6">
                                        <h3 className="justify-content-left d-flex"><mark className="highlightText">{category.title}</mark></h3>
                                        <label className="contentText">{category.description}</label>
                                        <Link className="mt-5" to={category.linkUrl}>{category.linkName}</Link>
                                    </div>
                                    <div className="col-md-2 col-ls-2 col-xl-2 mb-3" />
                                </div>
                            );
                        })
                    }                                 
                </div>
            </div>
        );
    }
}

export default Category;