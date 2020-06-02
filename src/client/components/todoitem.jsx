import React from 'react';

class TodoItem extends React.Component {

  constructor(){
    super();
    this.state = {
      msg:[],
    };
  }

  updateList(v) {
    if(v.length>1) {
      let temp = v
      this.setState({
        msg:[v, ...this.state.msg],
      });
    }
  }

  deletelist(event){
    console.log('delete?')
    let index = event.target.value
    let list = this.state.msg;
    let delmsg = list.splice(index,1)

    this.setState({
      msg:list,
    })

    this.props.updateDeleteList(delmsg)
  }

  render() {

    let list = this.state.msg.map((list,index)=> {
      return (
        <div>
          <li key={list}>{list}</li>
          <button value={index} onClick={(event)=>{this.deletelist(event)}}>delete</button>
        </div>
      )
    });

    return (
      <div>
        todoitem
        TO DO LIST:
        <ul>{list}</ul>
      </div>
    );
  }
}

export default TodoItem;