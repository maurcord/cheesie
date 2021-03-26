import React from 'react'
import Cheesecard from '../components/Cheesecard'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Searchbar from '../components/Searchbar'
import "../Stylesheets/Main.css"
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://swapi.dev/api/people/'
  })

class Main extends React.Component {
    
    state = {
        people: [],
        height: []
      }

      constructor() {
        super();
        api.get('/').then(res => {
          console.log(res.data)
          this.setState({ people: res.data.results, height: res.data.results })
        })
      }
    
    render() {
        return (
            <div className="main">
                <Header></Header>
                <Navbar></Navbar>
                <Searchbar></Searchbar>
                <Cheesecard></Cheesecard>
                {this.state.people.map(peopl => <div className='starwars' key={peopl.id}>{peopl.name} {peopl.height}</div>)}
            </div>
        )
    }
}
export default Main