import React from 'react';
import './App.css';

function App(props) {
    const message = props.message;

    if (message.length > 10) {

        return ( <
            div className = "App" >

            <
            p > Too long < /p>  < /
            div >
        );
    }
    return ( <
        div className = "App" >
        <
        p > { props.message } < /p> < /
        div >
    );








}





export default App;