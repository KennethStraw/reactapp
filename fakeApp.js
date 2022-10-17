import './App.css';
import { useState, useEffect } from 'react'

//We can use multiple functions to write our our program

const Person = (props) => {
  return (
    <>
    <h1>Name: John</h1>
    <h2>LastName: Doe</h2>
    <h3>Age: 30</h3>
    </>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0); //Anytime we call a function and it starts with use is called a hook.
  // First var of array is the state, second is the setter
  useEffect(() => { //Another callback function
    //This happens as soon as the component renders, so if we do alert('Reload' we would see that happen)
    //IMPORTANT: We never want to mutate the state manually, so doing counter = 100 would break everything
    //Instead setCounter(100) would do what we want. But that means after every change to our object 
    //Would change its state, and run the setCounter(100) again. Instead we need to create a dependency array, before the end of the callback func
    //An empty dependency array would mean, only on ever reload of the entire state would we run this effect
    //However, if we put in counter, every time counter is updated we would run the effect (infinite loop)
  }, [])
  return (
    <div className="App">

      {/*Ok so in react we cant comment, we need to use JS style comments inside of these curly braces
            <h1>Hello, {newUser ? 'somebody' : name}</h1> is an example of using the javascript*/}
      {/*Say we want to use a function and render mutliple lines of html (but really JSX) we need a JSX wrapper of <> </> */}
      {/*Now using a different function to render info goes as such <Person /> so open tag name close tag */}
      {/*Functions which are called components can take in parameters like such <Person name={'John'}/> 
      The component can accpet a paraemter with a props object. And we would use props.name
      name doesnt need curlybraces nor numbers, but dynamic data will need it*/}
      {/* State in react is a way to know about the situation of an object. First import { useState } from 'react' */}
      {/* <button onClick={() => alert('clicked')}>-</button> is an example of a button with a callback function. in this
      case it is an alert (popup on the screen.) */}
      {/* <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button> is an example of using state to change a valye
      notice we have the prevCount variable, which is just a getter (prev[Variablename]) */}
      <Person />
      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>

    </div>
  );
}

export default App;
