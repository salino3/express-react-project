
import {useEffect, useState} from 'react';



function App() {

 const [backendData, setbackendData ] = useState([{}])

useEffect(() => {
  fetch("/api")
    .then(res => res.json()
    ).then( data => {
      setbackendData(data)
      })

}, [])


//
  return (
    <div >
    <h1>Hola</h1>
    {(typeof backendData.users === 'undefined')  ? (
      <p>Loading..</p>
    ) : (
      backendData.users.map((user, index) => (
        <p key={index}>{user}</p>
      ))
    )}
    </div>
  );
}

export default App;
