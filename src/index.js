import React from 'react';
import ReactDOM from 'react-dom';



const Greeting = () => {
  return React.createElement('div', {}, React.createElement('h1', {}, "hello world"))
}

// function Greeting(){
//   return(
//     <div>
//       <h1> hello world </h1>
//     </div>
//   )
// }

ReactDOM.render(<Greeting />, document.getElementById('root'))
