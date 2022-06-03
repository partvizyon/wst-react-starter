// import { useEffect } from "react";
// import { createElement } from 'react';
import './style.scss';


function App() {
  /* 
    useEffect(() => {
      if (process.env.NODE_ENV === 'production') {
        // analytic bilgilendir
      }
    }, [])
   */


    const style ={color:'red', backgroundColor: 'yellow'}
  const todos = ['todo1', 'todo2', 'todo3']
  /*
  const h1 = createElement('h1', null, 'dijitrend.com')
  const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)))
  
  return createElement('main', {
    className: 'test',
    id: 'main'
  }, h1, ul)
*/

  return (
    <main id="main" className='test'>
      <h1 style={style}>dijitrend.com</h1>
      <label htmlFor='search'>Arama</label>
      <input type="text" id="search" />

      <ul>
        {todos.map((todo,index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </main>
  )

}

export default App;