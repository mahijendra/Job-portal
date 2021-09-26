import Login from './components/Sign up & Login /Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from "./components/Sign up & Login /SignUp"
import ForgotPassword from "./components/Sign up & Login /ForgotPassword";
import PostJobForm from "./components/Jobs/PostJobForm"
import Hero from "./components/Hero"
import ResetPassword from "./components/Sign up & Login /ResetPassword"
import RecruiterHome from "./components/Jobs/RecruiterHome"
import PostJob from "./components/Jobs/PostJob";
import CandidateHome from "./components/Jobs/CandidateHome"
import Test from "./components/Jobs/test"


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/hero" component={Hero}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/signUp" component={SignUp}></Route>
                <Route exact path="/forgotPassword" component={ForgotPassword}></Route>
                <Route exact path="/postJobForm" component={PostJobForm}></Route>
                <Route exact path="/postJob" component={PostJob}></Route>
                <Route exact path="/candidateHome" component={CandidateHome}></Route>
                <Route exact path="/recruiterHome" component={RecruiterHome}></Route>
                <div className="App">
                    {/*<Hero />*/}
                    {/*<RecruiterHome />
                    <Application />*/}
                    {/* <PostJobForm />*/}
                   {/* <SignUp/>*/}
                    {/*<Login />*/}
                    <Test />
                </div>
            </Switch>
        </Router>
    );
}

export default App;

