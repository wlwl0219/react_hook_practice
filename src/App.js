import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Funclass from './components/FuncClass';
import Topics from './components/Params';
import Input from './components/Input';
import Tabs from './components/Tabs';
import Title from './components/Title';
import Click from './components/Click';
import Confirm from './components/Confirm';
import PreventLeave from './components/PreventLeave';
import BeforeLeave from './components/BeforeLeave';
import FadeIn from './components/FadeIn';
import Network from './components/Network';
import Scroll from './components/Scroll';
import Fullscreen from './components/Fullscreen';
import Notification from './components/Notification';
import Axios from './components/Axios';

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
        <li>
          <Link to="/title">useTitle</Link>
        </li>
        <li>
          <Link to="/click">useClick</Link>
        </li>
        <li>
          <Link to="/confirm">useConfirm</Link>
        </li>
        <li>
          <Link to="/preventleave">usePreventLeave</Link>
        </li>
        <li>
          <Link to="/beforeleave">useBeforeLeave</Link>
        </li>
        <li>
          <Link to="/fadein">useFadeIn</Link>
        </li>
        <li>
          <Link to="/network">useNetwork</Link>
        </li>
        <li>
          <Link to="/scroll">useScroll</Link>
        </li>
        <li>
          <Link to="/fullscreen">useFullscreen</Link>
        </li>
        <li>
          <Link to="/notification">useNotification</Link>
        </li>
        <li>
          <Link to="/axios">useAxios</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/funcclass" component={Funclass} />
        <Route path="/topics" component={Topics} />
        <Route path="/input" component={Input} />
        <Route path="/tabs" component={Tabs} />
        <Route path="/title" component={Title} />
        <Route path="/click" component={Click} />
        <Route path="/confirm" component={Confirm} />
        <Route path="/preventleave" component={PreventLeave} />
        <Route path="/beforeleave" component={BeforeLeave} />
        <Route path="/fadein" component={FadeIn} />
        <Route path="/network" component={Network} />
        <Route path="/scroll" component={Scroll} />
        <Route path="/fullscreen" component={Fullscreen} />
        <Route path="/notification" component={Notification} />
        <Route path="/axios" component={Axios} />
        <Route path="/">Not found</Route>
      </Switch>
    </div>
  );
}

export default App;
