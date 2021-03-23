import './Stylesheets/App.css';
import Homepage from './components/Homepage';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div> 
       <NavBar></NavBar> 
        <Homepage></Homepage>
      </div>
     
    </div>
  );
}

export default App;
