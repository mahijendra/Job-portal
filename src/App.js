import LandingPage from './components/LandingPage'
import Login from './components/Sign up & Login /Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from "./components/Sign up & Login /SignUp"
import ForgotPassword from "./components/Sign up & Login /ForgotPassword"
import JobListing from "./components/Jobs/JobListing"
import PostJobForm from "./components/Jobs/PostJobForm"


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/landingPage" component={LandingPage}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/signUp" component={SignUp}></Route>
                <Route exact path="/forgotPassword" component={ForgotPassword}></Route>
                <Route exact path="/postJobForm" component={PostJobForm}></Route>
                <div className="App">
                   {/*<LandingPage/>*/}
                   {/*<JobListing />*/}
                    <PostJobForm />
                </div>
            </Switch>
        </Router>
    );
}

export default App;
