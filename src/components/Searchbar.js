import React from 'react'
import Navbar from '../components/Navbar'
import '../Stylesheets/Searchbar.css'


class Searchbar extends React.Component{
    render() {
        return (
            <div className="searchbar">
            <Navbar></Navbar>
            <div id="searchWrapper">
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="search for a cheese!"
                />
            </div>
            </div>
        );
    }
}
export default Searchbar

