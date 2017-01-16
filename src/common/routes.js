import { Route, IndexRoute } from 'react-router';
import App from './pages/App';

export default (
  <Route name="app" path="/">
      <IndexRoute component={App} />
  </Route>
);
