import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import YelpCamp from './pages/YelpCamp';
import ReactColors from './pages/ReactColors';
import Tracker from './pages/Tracker';
import WebApi from './pages/WebApi';
import ChatApp from './pages/ChatApp';

function App() {
    return (
        <>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/resume" exact component={Resume} />
                    <Route path="/about" exact component={About} />
                    <Route path="/yelp-camp" exact component={YelpCamp} />
                    <Route path="/react-colors" exact component={ReactColors} />
                    <Route path="/corona-tracker" exact component={Tracker} />
                    <Route path="/angular-crud" exact component={WebApi} />
                    <Route path="/chat-app" exact component={ChatApp} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
