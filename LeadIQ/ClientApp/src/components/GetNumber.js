import React from 'react';
import { Link } from "react-router-dom";

class GetNumber extends React.Component {

    render() {
        return (
            <Link to="/" target="_blank" className={"mt-2 btn liq-btn-primary liq-btn-primary-" + this.props.size}>1-888-653-2347</Link>
        );
    }
}

export default GetNumber;