import React from 'react'
import '../Stylesheets/Searchbar.css'


class Searchbar extends React.Component{
    render() {
        return (
            <div className="searchbar">
            <div>
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="search for a cheese!"
                /> 
                <button>Search</button>
            </div>
           
            </div>
        );
    }
}
export default Searchbar

