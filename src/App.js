import Login from './components/Sign up & Login /Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from "./components/Sign up & Login /SignUp"
import ForgotPassword from "./components/Sign up & Login /ForgotPassword";
import PostJobForm from "./components/Jobs/PostJobForm"
import Hero from "./components/Hero"
import ResetPassword from "./components/Sign up & Login /ResetPassword"
import NavBar from "./components/Navbar"
import Application from "./components/Jobs/Applications"
import JobsHome from "./components/Jobs/JobsHome"
import PostJob from "./components/Jobs/PostJob";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/hero" component={Hero}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/signUp" component={SignUp}></Route>
                <Route exact path="/forgotPassword" component={ForgotPassword}></Route>
                <Route exact path="/postJobForm" component={PostJobForm}></Route>
                <div className="App">
                    {/*<Hero />*/}
                  {/*  <Application />*/}
                    <JobsHome />
                   {/* <PostJobForm />*/}
                </div>
            </Switch>
        </Router>
    );
}

export default App;

