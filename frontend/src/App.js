import React, { useState } from 'react';
import NavBar from "./components/Navbar";
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Workouts from './components/Workouts';
import Progress from './components/Progress';
import Settings from './components/Settings';
import Billing from './components/Billing';

const App = () => {
    return (
        <div>
            {" "}
            <div className="container">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route  path="/home" render={(props) => <Home {...props}  />} />
                    <Route path="/schedule" render={(props) => <Schedule {...props}  />} />
                    <Route path="/workouts" render={(props) => <Workouts {...props}  />} />
                    <Route path="/progress" render={(props) => <Progress {...props}  />} />
                    <Route path="/settings" render={(props) => <Settings {...props}  />} />
                    <Route path="/billing" render={(props) => <Billing {...props}  />} />
                </Switch>
            </div>
        </div>
    )
}

export default App;