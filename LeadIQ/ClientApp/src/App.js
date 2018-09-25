import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import LayoutFooter from './components/LayoutFooter';
import TopNav from './components/TopNav';
import AccountBasedProspector from './pages/AccountBasedProspector';

import Category from './pages/Category';
import GetLeads from './pages/GetLeads';
import Home from './pages/Home';
import LeadsUniversityOne from './pages/LeadsUniversityOne';
import LeadsUniversityTwo from './pages/LeadsUniversityTwo';
import LeadsUniversityThree from './pages/LeadsUniversityThree';
import Pricing from './pages/Pricing';
import ProspectAnywhere from './pages/ProspectAnywhere';
import University from './pages/University';
import Resources from './pages/Resources';
import PublicSalesAnnouncements from './pages/PublicSalesAnnouncements';
import RateMyPitch from './pages/RateMyPitch';
import TripActions from './pages/TripActions';
import CampaignBuilder from './pages/CampaignBuilder';
import Videolicious from './pages/Videolicious';
import BlogRoutes from './blogRoutes.js'; 
import FrequentlyAskedQuestion from './pages/FrequentlyAskedQuestion.js';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <LayoutFooter>
                    <Switch>
                        <Route exact path='/' component={() => (<div><TopNav /><Home /></div>)} />
                        <Route exact path='/pricing' component={() => (<div><TopNav /><Pricing /></div>)} />
                        <Route exact path='/prospect-anywhere' component={() => (<div><TopNav /><ProspectAnywhere /></div>)} />
                        <Route exact path='/account-based-prospector' component={() => (<div><TopNav /><AccountBasedProspector /></div>)} />
                        <Route exact path='/resources' component={() => (<div><TopNav /><Resources /></div>)} />
                        <Route exact path='/public-sales-announcements' component={() => (<div><TopNav /><PublicSalesAnnouncements /></div>)} />
                        <Route exact path='/rate-my-pitch' component={() => (<div><TopNav /><RateMyPitch /></div>)} />
                        <Route exact path='/tripactions-case-study' component={() => (<div><TopNav /><TripActions /></div>)} />
                        <Route exact path='/campaign-builder' component={() => (<div><TopNav /><CampaignBuilder /></div>)} />
                        <Route exact path='/videolicious-case-study' component={() => (<div><TopNav /><Videolicious /></div>)} />
                        <Route exact path='/faq' component={() => (<div><TopNav /><FrequentlyAskedQuestion /></div>)} />
                        <Route exact path='/privacy-policy' component={() => (<div><TopNav /><PrivacyPolicy /></div>)} />
                        <Route exact path='/terms-of-use' component={() => (<div><TopNav /><TermsOfUse /></div>)} />

                        <Route exact path='/category' component={Category} />
                        <Route exact path='/university' component={University} />
                        <Route exact path='/get-100-free-leads' component={GetLeads} />
                        <Route exact path='/leadiq-university-one' component={LeadsUniversityOne} />
                        <Route exact path='/leadiq-university-two' component={LeadsUniversityTwo} />
                        <Route exact path='/leadiq-university-three' component={LeadsUniversityThree} />

                        <BlogRoutes />
                    </Switch>
                </LayoutFooter>

            </BrowserRouter>
        );
    }
}

export default App;