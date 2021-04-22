import React, { Component } from "react";
import { connect } from "react-redux";

import {handleInput,addItem} from  '../../../redux/actions/action'



import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash,faCheckSquare,faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faTrash,faCheckSquare,faPlus);


export class Form extends Component {

  constructor(props) {
    super(props)
  }

  handleInput = (e) => {
    this.props.handleChangeAction(e.target.value);
  }

  addItem = (e) => {
    e.preventDefault();
    this.props.addItemAction(this.props.todoCurrentItem)

  }

  componentDidMount(){
    // console.log("logging the props:",this.props); // componentDidMount() : render only once
    
  }
  
  componentDidUpdate(){
    // console.log("logging the props:",this.props); // componentDidUpdate() : renders each time when updation occur
  }

  render() {
    // console.log("logging the props:",this.props);  // same to componentDidUpdate()
    return (
      <div>
        <form id="todo_form" onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Add Item"
            value={this.props.todoCurrentItem.text}
            onChange={this.handleInput}
            disabled=""
            autoFocus
          />
          <button type="submit">
            <FontAwesomeIcon icon="plus" />
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("states",state);
  const {items,currentItem} = state.todoReducer;
  // console.log("states - item Array",items);    
  return {
    todoItems : items,
    todoCurrentItem :currentItem
  }
  //we should return an object ,even if it is an empty object : it is madatory
};

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    handleChangeAction : (eventValue) => dispatch(handleInput(eventValue)), // without "ownProps"
    // handleChangeAction : () => dispatch(handleInput(ownProps.eventValue)) // with ownProps
    addItemAction :(newItem) => dispatch(addItem(newItem))
  
  }
  //we should return an object ,even if it is an empty object : it is madatory

};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
