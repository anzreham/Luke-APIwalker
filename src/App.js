import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Router} from '@reach/router'
import Search from './components/Search.jsx'
import People from './components/People.jsx'
import Planets from './components/Planets.jsx'

function App() {
  return (
    <div className="container">
    <h1> Luke APIwalker</h1>

        <Search />
        <Router>
       
           <People path  =  "/People/:id" />
           <Planets path  =  "/Planets/:id" />

           {/* <Planets path = "/Planets/:id " />  */}
           {/* <Planets path = "/planets/:id" /> */}
        </Router>
        
    </div>
  );
}

export default App;
