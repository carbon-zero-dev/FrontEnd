import React from 'react';
import { add } from './functions';

class App extends React.Component {
    constructor(){
        super() 
    }
    //arrow function
    clickHandler=()=> {
        alert(add(1,2));
    } 
    
    render () {
        return (
            <div>
                react webpack
                <button onClick={this.clickHandler}>button</button>
            </div>
        )
    }
}
export default App;
