import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Topics from './components/Params';
import Home from './components/Home';
import Funclass from './components/FuncClass';

function App() {
  return (
    <div>
      <h1>Hello React Router and Hook</h1>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/funcclass">useFunc</Link>
        </li>
        <li>
          <Link to="/topics">useParams</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/funcclass" component={Funclass} />
        <Route path="/topics" component={Topics} />
        <Route path="/">Not found</Route>
      </Switch>
    </div>
  );
}

export default App;
