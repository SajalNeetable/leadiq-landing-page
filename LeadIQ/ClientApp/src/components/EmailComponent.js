import React, { Component } from 'react';


export default class EmailComponent extends Component {
    render() {
        return (
            <div className="mt-5">
                <form id="free-leads-form justify-content-center  d-flex">
                    <div className="form-group container" id="email-field">
                        <div className="row justify-content-center d-flex">

                        <div className="col-0 col-xs-0 col-sm-0 col-md-3 col-ls-3 col-xl-3">
                                &nbsp;
                        </div>
                            <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-ls-6 col-xl-6 row ">
                                <i className="fa fa-envelope email-envlope"></i>
                                <input type="email" className="form-control col-6 col-xs-6 col-sm-6 col-md-6 col-ls-6 col-xl-6 email-text pr-2"
                                    id="email" name="email" placeholder="Email" required="required" />
                                <button type="submit" className="btn btn-success col-6 col-xs-6 col-sm-6 col-md-6 col-ls-6 col-xl-6" id="submit" size="lg">Try it free</button>
                            </div>
                            <div className="col-0 col-xs-0 col-sm-0 col-md-3 col-ls-3 col-xl-3">
                                &nbsp;
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}