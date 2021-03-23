import React from 'react'
import Cheesecard from '../components/Cheesecard'
import Header from '../components/Header'
import Searchbar from '../components/Searchbar'
import "../Stylesheets/Main.css"

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Header></Header>
                <Searchbar></Searchbar>
                <Cheesecard></Cheesecard>
            </div>
        )
    }


}
export default Main