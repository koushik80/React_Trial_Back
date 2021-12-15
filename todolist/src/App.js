import React, { useState } from 'react';
import './App.css';

function App() {
    const [person, setPerson] = useState({ name: '', age: '' });

    const inputChanged = (event) => {
        setPerson({...person, [event.target.name]: event.target.value });
    }
    const age = prompt('age');


    const showAlert = () => {
        if (age >= 18) {
            alert(`Hello ${person.name}`);
        } else if (age < 18) {
            alert(`You are too young`);
        } else {
            alert('Exactly!')
        }


    }

    return ( <
        div className = "App" >

        <
        table >
        <
        input placeholder = "Name"
        name = "name"
        value = { person.name }
        onChange = { inputChanged }
        />  <
        input placeholder = "Age"
        name = "age"
        value = { person.age }
        onChange = { inputChanged }
        /> <
        button onClick = { showAlert } > Check age < /button>  < /
        table > <
        /
        div >
    );
}

export default App;