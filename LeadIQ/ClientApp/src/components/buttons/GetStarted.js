import React from 'react';
import { Link } from "react-router-dom";

class GetStarted extends React.Component {

    render() {
        return (
            <Link to="/" target="_blank" className={"mt-2 btn liq-btn-primary pl-5 pr-5 pt-2 pb-2  liq-btn-primary-" + this.props.size}>GET STARTED</Link>
        );
    }
}

export default GetStarted;