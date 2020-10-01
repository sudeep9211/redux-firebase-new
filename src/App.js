import React from 'react';
import './Apps.css';
import Navbar from './component/layout/Navbar';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

//import { Row, Col } from "react-bootstrap";
import DashBoard from './component/Dashboard/Dashboard';
import Signin from './component/Auth/Signin';
import Signup from './component/Auth/Signup';
import Home from './component/layout/Home';
import Auth from './component/Auth/UserAuth';
import Quiz from './component/layout/QuizLayout';
import Quizresult from './component/Quiz/Result';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route path='/' component={Home} exact />
            <PrivateRoute path='/dashboard' component={DashBoard} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
            <Route path='/c++/quiz' component={Quiz} />
            <Route path='/c++/result' component={Quizresult} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ path: '/signin' }} />
      )
    }
  />
);
export default App;
