﻿import React from 'react';
import { Link } from "react-router-dom";

class GetUniversityButton extends React.Component {

    render() {
        return (
            <Link to="/leadiq-university-one"  className="btn liq-btn-primary mt-2">JOIN LeadIQ UNIVERSITY</Link>
        );
    }
}

export default GetUniversityButton;