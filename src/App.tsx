import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderNav from './Components/HeaderNav/HeaderNav';
import Home from './Screens/Home/Home';
import Verification from './Screens/Verification/Verification';

function App() {
  return (
    <Router>
      <div className="App">

        <HeaderNav />

        <div className="app-container">
        
          <Switch> 
            <Route exact path='/' component={Home}></Route> 
            <Route exact path='/verification/:id' component={Verification}></Route>
          </Switch>
        
        </div>
        
      </div>
    </Router>
  );
}

export default App;
