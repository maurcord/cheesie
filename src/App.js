import './Stylesheets/App.css';
import Main from './components/Main';
import { Component } from 'react';



class App extends Component {

  
  render() {
  return (
    <div className="App">
      <header> 
        <Main></Main> 
      </header>
    </div>
  );
}}

export default App;
