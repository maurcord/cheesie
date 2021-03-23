import React from 'react'
import Cheesepic from './Cheesepic'



class Cheesecard extends React.Component{
    render() {
        return (
            <div className="Cheesecard">
                <h1>Welcome to Cheesie, a cheese pairing app!</h1>
              <div>
               <Cheesepic></Cheesepic>
            </div>
            </div> 
            
        );
    }
}
export default Cheesecard


