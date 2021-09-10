import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import NotFound from './pages/notfund';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path='*' component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}