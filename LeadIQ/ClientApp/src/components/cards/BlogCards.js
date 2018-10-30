import React from 'react';
import { Link } from "react-router-dom";

class BlogCards extends React.Component {
    render() {
        console.log("this.props", this.props.key);
        return (
            <div >
                {(this.props.index % 2 === 0) ? null: null }
            </div>
        );
    }
}

export default BlogCards;