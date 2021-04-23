
import React, { Component } from 'react'
import { connect } from 'react-redux'
import "../../../styles/Todo/tab/Tab.css";
import { showTaskWiseItem } from  '../../../redux/actions/action'


class ActiveTab extends Component {
  constructor(props) {
    super(props)
    // this.a;
    
  }
  

showTaskWiseItems = (activeStateId) => {
    const todoItems = this.props.todoItems;

    const AllTasks = todoItems;
    const ActiveTasks = todoItems.filter(item=> !item.checked);
    const CompletedTasks = todoItems.filter(item=>item.checked);


    if(activeStateId == 2){
      return ActiveTasks

    }else if(activeStateId == 3){

    }else{

    }

    // this.props.listTaskWiseItem(activeStateId,AllTasks,ActiveTasks,CompletedTasks);


  }




  render() {
    return (
      <div>
        <ul className="Todo_Tab">
          <li className="Tab_Link">
            <button 
            className="active"
            onClick={()=>{this.showTaskWiseItems(1)}}
            
            >
                  All
          </button>
          </li>
          <li className="Tab_Link">
            <button
            onClick={()=>{this.showTaskWiseItems(2)}}

            >
                  Active
              </button>
          </li>
  
          <li className="Tab_Link">
            <button
            onClick={()=>{this.toggleActiveState(3)}}
            
            >
              Completed
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  
  }
} 

const mapDispatchToProps = (dispatch) => {
  return{

    listTaskWiseItem:()=>dispatch(showTaskWiseItem)
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveTab)



