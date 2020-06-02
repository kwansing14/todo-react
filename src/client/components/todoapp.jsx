import React from 'react';
import Form from './form'
import ItemList from './itemlist'
import DeleteItemList from './deleteitemlist'

class TodoApp extends React.Component {

  constructor() {
    super()
    this.state = {
      msg:'',
    }
  }

  setValue(v){
    this.setState ({
      msg:v,
    })
    this.refs.child.updateList(v);
  }


  render() {
    return (
      <div>
        todolist
        {this.state.form}
        <Form currentMsg={(v) => {this.setValue(v)}}/>
        <ItemList
          ref='child'
          currentMsg={this.state.msg}
        />
        <DeleteItemList/>
      </div>
    );
  }
}

export default TodoApp;