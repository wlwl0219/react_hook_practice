import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Funclass from './components/FuncClass';
import Topics from './components/Params';
import Input from './components/Input';
import Tabs from './components/Tabs';

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
        <li>
          <Link to="/input">useInput</Link>
        </li>
        <li>
          <Link to="/tabs">useTabs</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/funcclass" component={Funclass} />
        <Route path="/topics" component={Topics} />
        <Route path="/input" component={Input} />
        <Route path="/tabs" component={Tabs} />
        <Route path="/">Not found</Route>
      </Switch>
    </div>
  );
}

export default App;
