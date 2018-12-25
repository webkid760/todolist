import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


class List extends React.Component {
  constructor(props) {
    super(props);
    this.delList = this.delList.bind(this);
  }
  delList(e) {
    let index = e.target.getAttribute("data-id");
    this.props.onChange(index);
  }
  render() {
    return this.props.tolist.map((li, index) => {
      return (
        <li key={index}>
          {li}
          <span onClick={this.delList} data-id={index}>
            x
          </span>
        </li>
      );
    });
  }
}

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.listChange = this.listChange.bind(this);
		this.state={
	    item: "xxx",
	    list: [1, 2, 3],
	    targetValue:'work'
	  };
  }

  listChange(index) {
    let cur = this.state.list;
    cur.splice(index, 1);
    this.setState({ list: cur });
  }

  addItem(){
    let value = this.state.targetValue;
    let newlist = this.state.list
    newlist.push(value)
    this.setState({list:newlist})
  }

  getValue(e){
    this.setState({targetValue:e.target.value})
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.targetValue} onChange={this.getValue.bind(this)}/><button onClick={this.addItem.bind(this)}>确定</button>
        <ul>
          <List
            additem={this.state.item}
            tolist={this.state.list}
            onChange={this.listChange}
          />
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Todos />, document.getElementById("app"));
