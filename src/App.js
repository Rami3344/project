import './App.css';
import Navbar from './Home/Navbar';
import Cours from './Cours/Cours'
import Body from './Body';
import Footer from './Home/Footer';
import {BrowserRouter,Route,Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/Body">
      <Body/>
        </Route>
        <Route path="/Cours">
          <Cours/>
        </Route>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
