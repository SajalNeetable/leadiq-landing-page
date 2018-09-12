import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import BlogTemplate from './blogs/BlogTemplate';
import Layout from './components/Layout';
import Blog from './pages/Blog';
import Category from './pages/Category';
import Home from './pages/Home';
import University from './pages/University';
import GetLeads from './pages/GetLeads';
import LeadsUniversityOne from './pages/LeadsUniversityOne';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Home} />

                        <Route exact path='/category' component={Category} />
                        <Route exact path='/university' component={University} />
                        <Route exact path='/get-100-free-leads' component={GetLeads} />
                        <Route exact path='/leadiq-university-one' component={LeadsUniversityOne} />

                        <Route exact path='/blog' component={Blog} />
                        <Route exact path='/blog/template' component={BlogTemplate} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;