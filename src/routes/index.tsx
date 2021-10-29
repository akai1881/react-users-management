import UserCreate from 'containers/UserCreate';
import UserEdit from 'containers/UserEdit';
import UserDetails from 'containers/UserDetails';
import Users from 'containers/Users';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Users} />
                <Route exact path="/contact/:id" component={UserDetails} />
                <Route exact path="/create" component={UserCreate} />
                <Route exact path="/edit/:id" component={UserEdit} />
            </Switch>
        </Router>
    );
};

export default AppRoutes;
