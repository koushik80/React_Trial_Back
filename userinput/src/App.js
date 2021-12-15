import React, { useState } from 'react';

import './App.css';

function App() {
    const [person, setPerson] = useState({firstname: '', lastname: '', email: ''});

    const inputChanged = (event) => {
        setPerson({...person, [event.target.name]: event.target.value});
    }
    const formSubmitted = (event) => {
        event.preventDefault();
         // Do something with your data
        }
      

    return ( <
        div className = "App" > 
        
         Name: {person.firstname} {person.lastname} Email: {person.email} <br />
         <form>
          <input placeholder="First name" name="firstname" value={person.firstname} onChange={inputChanged} />
          <input placeholder="Last name" name="lastname" value={person.lastname} onChange={inputChanged} />
          <input placeholder="Email" name="email" value={person.email} onChange={inputChanged} />
        
          <input type="submit" value="Submit" onSubmit={formSubmitted}/>
         </form>

         <
        /div>
    );
}

export default App;