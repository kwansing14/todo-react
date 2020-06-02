import React from 'react';
import TodoItem from './todoitem';

class ItemList extends React.Component {

  updateList(v) {
    this.refs.child.updateList(v);
  }

  updateDeleteList(v) {
    console.log(v)
    this.props.updateDeleteList(v)
  }
  render() {

    return (
      <div>
        <ul>No LIST HERE</ul>
        <br/>
        <TodoItem
          ref='child'
          updateDeleteList={
            (v) => {this.updateDeleteList(v)}
          }
        />
      </div>
    );
  }
}

export default ItemList;