import React from 'react';
import { hot } from 'react-hot-loader';
import TodoApp from './components/todoapp';

class App extends React.Component {
  render() {
    return (
      <div>
        Welcome.
        <TodoApp/>
      </div>
    );
  }
}

export default hot(module)(App);