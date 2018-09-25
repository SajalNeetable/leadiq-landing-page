import React from 'react';
import { Link } from "react-router-dom";

class Count extends React.Component {

    render() {
        return (
            <Link to="/" className={"btn liq-btn-primary liq-btn-primary-" + this.props.size}>COUNT ME IN!</Link>
        );
    }
}

export default Count;