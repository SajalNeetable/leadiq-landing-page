import React from 'react';
import { Link } from "react-router-dom";

class SalesTalk extends React.Component {

    render() {
        return (
            <Link to="/" className={"mt-2 btn liq-btn-primary salesTalkDesign liq-btn-primary-" + this.props.size}>TALK TO SALES</Link>
        );
    }
}

export default SalesTalk;