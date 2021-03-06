import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '@pages/Home';

export default function Navigation(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
