import React, { Component } from "react";
import { connect } from "react-redux";

import {handleInput} from  '../../../redux/actions/action'

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

  componentDidMount(){
    
  }
  

  render() {
    console.log("logging the props:",this.props);
    return (
      <div>
        <form id="todo_form" onSubmit="">
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
  console.log("states",state);
  const {items,currentItem} = state.todoReducer;
  return {
    todoItems : items,
    todoCurrentItem :currentItem
  }
};

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    handleChangeAction : (eventValue) => dispatch(handleInput(eventValue)) // without "ownProps"
    // handleChangeAction : () => dispatch(handleInput(ownProps.eventValue)) // with ownProps
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
