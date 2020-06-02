import React from 'react';

class Form extends React.Component {

  constructor(){
    super();
    this.state = {
      temp:'',
      todolist:[],
      errormsg:"",
    };
  }

  clickHandler(event){
    if(this.state.temp.length>1) {
      let temp = this.state.temp
      this.props.currentMsg(this.state.temp)
      this.setState({
        todolist:[temp, ...this.state.todolist],
        temp:"",
        id:0,
        errormsg:"",
      });
      //button trigger reference

    } else {
      this.setState({errormsg:"Hello you need to type something"})
    }
  }

  changeHandler(event){
    //this.setState({word:event.target.value});
    console.log("change", event.target.value);
    let currentValue = event.target.value
    let tempF = Number(currentValue)*1.8+32;
    this.setState({
      temp: currentValue,
    })
  }

  deletelist(event){
    console.log('delete?')
    let index = event.target.value
    let list = this.state.todolist;
    list.splice(index,1)

    this.setState({
      todolist:list,
    })
  }

  componentDidMount() {
    var input = document.getElementById("inputBtn");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
       event.preventDefault();
       document.getElementById("btnInput").click();
      }
    });
  }

  render() {
    // calling cx sets all the styles on the element in the display variable
    let List
    if (this.state.todolist.length > 0) {
      List = this.state.todolist.map((list,index)=> {
        return (
          <div>
            <li key={list}>{list}</li>
            <button value={index} onClick={(event)=>{this.deletelist(event)}}>delete</button>
          </div>
        )
      });
    }
    return (
      <div>
        <div>
          <input id="inputBtn" value={this.state.temp} onChange={(event)=>{this.changeHandler(event);}}/>
          <button id="btnInput" onClick={()=>{this.clickHandler()}}>Click</button>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default Form;