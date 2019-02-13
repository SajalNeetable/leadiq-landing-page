import React, { Component, Fragment } from "react";

class EnrichmentAPI extends Component {
  render() {
    return (
      <Fragment>
        <div className="row section-50vh">
          <div className="col" />
          <div className="col-6 p-2">
            <h6 className="enrichment-title">
              Conquer the world with a few lines of code.
            </h6>
            <p className="pt-2 text-muted">
              Access one of the world’s largest B2B datasets of propect data via
              our business intelligence API.
            </p>
            <div className="row p-2">
              <button className="enrichment-hero-banner-button">
                GET STARTED
              </button>
              <button className="enrichment-hero-banner-button ml-3">
                VIEW THE DOCS
              </button>
            </div>
          </div>
          <div className="col-4">
            <img src="/img/enrichment-api/hero-profile.png" />
          </div>
          <div className="col" />
        </div>

        <div className="row section-100vh bg-light">
          <div className="col" />
          <div className="col-2">
            <img src="/img/enrichment-api/illustration-1.png" />
          </div>

          <div className="col-6">
            <div className="enrichment-api-card p-5">
              <h3 className="text-dark">Contact Data</h3>
              <h6 className="mt-2 text-muted">
                Look up information in LeadIQ’s vast database of over 100
                million professionals and growing - query for information like
                work emails, phone number, job titles, company, seniority, and
                more. Fill in the blanks in your internal data, or give your
                customers access to this data right inside your application.
              </h6>
            </div>

            <div className="enrichment-api-card p-5 mt-3">
              <h4 className="text-dark">Company Data</h4>
              <h6 className="mt-2 text-muted">
                With millions of companies and counting, look up details - such
                as industry, location, website, and more. Use this information
                to change the way your business approaches prospects internally,
                find new target accounts, or enrich information inside your
                customer facing applications.
              </h6>
            </div>

            <div className="enrichment-api-card p-5 mt-3">
              <h4 className="text-dark">Timestamp Information</h4>
              <h6 className="mt-2 text-muted">
                Data is not binary. We all know data can get stale over time.
                LeadIQ uses advance technology to lookup and verify data in real
                time. Get the most current B2B contact data using our last
                verified timestamp data.
              </h6>
            </div>
          </div>

          <div className="col-2 login-illustration-2">
            <img src="/img/enrichment-api/illustration-2.png" />
          </div>
          <div className="col" />
        </div>

        <div className="row section-80vh enrichment-section-color d-flex align-items-center">
          <div className="col" />
          <div className="col-6">
            <img src="/img/enrichment-api/sales-intelligence.png" />
          </div>
          <div className="col-4">
            <h4 className="text-dark">Sales Intelligence</h4>
            <p className="mt-3 text-muted">
              Leverage our Data APIs to find your target customer’s email and
              phone contacts. We automatically update contact data to provide
              you with the most accurate data for your sales needs, saving you
              time and effort on data entry.
            </p>
            <h6 className="mt-3 text-primary">View the docs</h6>
          </div>
          <div className="col" />
        </div>

        <div className="row section-80vh d-flex align-items-center">
          <div className="col" />
          <div className="col-4">
            <h4 className="text-dark">Marketing Intelligence</h4>
            <p className="mt-3 text-muted">
              Enrich missing profile information for your inbound B2B customers.
              We combine dozens of data sources to keep tabs on current and past
              employment information, social profiles, and more, making it
              easier to segment your inbound customers.
            </p>
            <h6 className="mt-3  text-primary">View the docs</h6>
          </div>
          <div className="col-3 pr-0">
            <img src="/img/enrichment-api/login.png" />
          </div>
          <div className="col-3 pl-0">
            <img src="/img/enrichment-api/code.png" />
          </div>
          <div className="col" />
        </div>

        <div className="row section-80vh enrichment-section-color">
          <div className="col" />
          <div className="col-10 p-2 mt-5 ">
            <h6 className="enrichment-title text-center">
              Where can you use this data?
            </h6>
            <h6 className="mt-2 text-muted text-center">
              With millions of records, there are hundreds of ways to use the
              API.
            </h6>
            <br />
            <div className="row">
              <div className="col-4 mt-5">
                <img src="/img/enrichment-api/small-illustration-1.png" />
                <p className="">
                  Enrich your company’s internal prospect data.
                </p>
                <h6 className="mt-2 text-muted">
                  Missing contact information? What about enriching old data?
                  Fill in the blanks on your existing prospects, leads, and
                  companies. Update your existing database with current data.
                </h6>
              </div>

              <div className="col-4 mt-5">
                <img src="/img/enrichment-api/small-illustration-2.png" />
                <p className="">Improve your customer facing applications.</p>
                <h6 className="mt-2 text-muted">
                  Want to make your product better for your customers? If your
                  product or application has any piece of B2B prospect data
                  involved in it, use the API to complete the information and
                  delivery contacts or company data to your customers.
                </h6>
              </div>

              <div className="col-4 mt-5">
                <img src="/img/enrichment-api/small-illustration-3.png" />
                <p className="">Increase conversion on lead forms.</p>
                <h6 className="mt-2 text-muted">
                  Every data point you ask a prospect for could be hurting your
                  conversion. Collect less information from your cutomers and
                  let LeadIQ’s API fill in the blanks after conversion.
                </h6>
              </div>
            </div>
          </div>
          <div className="col" />
        </div>

        <div className="row section-50vh enrichment-section-blue">
          <div className="col" />
          <div className="col-8 p-2 mt-5 ">
            <h6 className="enrichment-title text-center text-white">
              Thousands of companies use LeadIQ.
            </h6>
            <br />
            <div className="row d-flex justify-content-center mt-5">
              <div className="col-6">
                <p className="text-white">Get started for free.</p>
                <h6 className="mt-2 text-white">
                  Enjoy 15 contact search credits in risk free 7 days trial.
                </h6>
              </div>
              <div className="col-6">
                <input type="text" className="enrichment-email text-white" />
                <div
                  className={
                    "btn liq-btn-secondary button-design liq-btn-primary-"
                  }
                >
                  Start for free
                </div>
              </div>
            </div>
          </div>

          <div className="col" />
        </div>
      </Fragment>
    );
  }
}

export default EnrichmentAPI;
