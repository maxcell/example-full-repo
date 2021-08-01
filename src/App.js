import {hot} from 'react-hot-loader/root'
import * as React from 'react';
import {Title} from './Title';

const App = () => {
  const [count, setCount] = React.useState(0)
  return (
    <React.Fragment>
    <Title text="hello!" />
    <button style={{fontSize: '1rem'}} onClick={() => {setCount(count + 1)}}>clicked {count} times</button>
    </React.Fragment>
  )
}

export default hot(App);
