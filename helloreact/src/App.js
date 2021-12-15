import React, { useState } from 'react';

import './App.css';

function App() {
    const [firstName, setFirstName] = useState('John');
    const [message, setMessage] = useState('Hello')


    return ( <
        div > { message } { firstName } <
        /div>
    )
}

export default App;