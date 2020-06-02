import React from 'react';

class DeleteItemList extends React.Component {

  constructor(){
    super();
    this.state = {
      msg:[],
    };
  }

  updateDeleteList(v) {
    console.log("deleted"+v)
    let temp = v
    this.setState({
      msg:[v, ...this.state.msg],
    });
  }

  render() {

    let list = this.state.msg.map((list,index)=> {
      return (
        <div>
          <li key={list}>{list}</li>
        </div>
      )
    });

    return (
      <div>
        deleteitemlist:
        <ul>{list}</ul>
      </div>
    );
  }
}

export default DeleteItemList;