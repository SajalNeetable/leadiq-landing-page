﻿import React from 'react';
import { Link } from "react-router-dom";

class GetFreeLeadsButton extends React.Component {

    render() {
        return (
            <Link to="/get-100-free-leads"  className={"mt-2 btn liq-btn-primary liq-btn-primary-" + this.props.size}>GET 100 LEADS FREE</Link>
        );
    }
}

export default GetFreeLeadsButton;