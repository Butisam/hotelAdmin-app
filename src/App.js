import './App.css';
import {Route,Switch , BrowserRouter as Router} from 'react-router-dom'
import SignUp from './components/SignUp';
import Dashboard from './components/dashboard'
import Update from'./components/update'
import View from './components/view'

function App() {
  return (
<Router>
<Switch>
<Route exact path="/" component={SignUp}></Route> 
<Route exact path="/dashboard" component={Dashboard}></Route>
<Route path="/update" component={Update}></Route>
<Route path="/view" component={View}></Route>
</Switch>
</Router>
    

  );
}

export default App;
