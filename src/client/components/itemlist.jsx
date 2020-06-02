import React from 'react';
import TodoItem from './todoitem';

let msg = [];

class ItemList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      msg:[],
    };
  }

  updateList(v) {
    // this.setState({
    //   msg:v
    // })
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
    list.splice(index,1)
    this.setState({
      msg:list,
    })
  }

  render() {
    // console.log('rendering itemlist')
    // console.log(this.props.currentMsg)
    // //let error = "Hello you need to type something";
    // if(this.props.currentMsg.length > 0) {
    //   msg.push(this.props.currentMsg)
    //   let error = ''
    // }


    let list = this.state.msg.map((list,index)=> {
      return (
        <div>
          <li key={list}>{list}</li>
          <button value={index} onClick={(event)=>{this.deletelist(event)}}>delete</button>
        </div>
      )
    });

    console.log('numba 1')
    return (
      <div>
        <ul>list: {list}</ul>
        <br/>
        <TodoItem/>
      </div>
    );
  }
}

export default ItemList;