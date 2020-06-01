import React from 'react';
import { hot } from 'react-hot-loader';
import Form from './components/form'

class App extends React.Component {
  render() {
    return (
      <div>
        Welcome.
        <Form />
      </div>
    );
  }
}

export default hot(module)(App);