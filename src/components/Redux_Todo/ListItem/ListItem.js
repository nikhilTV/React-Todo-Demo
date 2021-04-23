import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteItem,updateItem,completedTask } from  '../../../redux/actions/action'
import "../../../styles/Todo/list/ListItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export class ListItem extends Component {
    constructor(props) {
        super(props)
        // this.listItems = this.listItems.bin(this)
        
        // this.todoItems = 2;
    }

    listItems = () =>{
    console.log("logging all props",this.props);
    // console.log("logging all props",this.props.todoItems);
    const items = this.props.todoItems;
    const listItems = items.map((item)=>{
        return (
            <div className="list" key={item.key}>
              <p>
                <input
                  type="checkbox"
                  id={item.key}
                  onChange={()=>{this.addToCompletedTask(item.key)}}
      
                  // defaultChecked={item.checked ? 'checked' : ''}
                />
      
                <input
                  className="ListItem_Input"
                  type="text"
                  value={item.text}
                  id={item.key}
                  onChange={(e)=>{this.updateItems(e.target.value,item.key)}}
                  
                />
      
                <span>
                  <FontAwesomeIcon
                    className="Delete_ListItem"
                    icon="trash"
                    onClick={()=>this.deleteItems(item.key)}
                  />
                </span>
              </p>
            </div>
          );

    })

    return listItems;

        
    } 



    deleteItems = (itemKey) =>{
        // alert(itemKey)
        const listItems = this.props.todoItems;
        // console.log("logging listItems- at delete function",listItems);
        const filterItems = listItems.filter((item)=>item.key !== itemKey)
        // console.log("filtered items - delete function",filterItems);
        this.props.deleteItemAction(filterItems)

    }

    updateItems = (changedText,itemKey) => {
      const todoItems = this.props.todoItems;
      // console.log("before updation",todoItems);
      todoItems.map((item)=>{
        if(item.key == itemKey){
          item.text = changedText
        }
      })
      // console.log("after updation",todoItems);
      
      this.props.updateItemAction(todoItems)

    }


    addToCompletedTask = (itemKey) => {
      const todoItems = this.props.todoItems;
      todoItems.map((item)=>{
        if(item.key == itemKey){
          item.checked = !item.checked
        }

      });
      this.props.completedTaskAction(todoItems)

    }
    
    
    render() {
        console.log("logging props",this.props);
        return (
            <div>
                {this.listItems()}
              
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state at ListItem ",state);
    const {items,currentItem} = state.todoReducer;
    // console.log("states - item Array",items);

    return {

        todoItems : items,
        // todoCurrentItems : currentItem

    }
}

const mapDispatchToProps = (dispatch) => {
  return{
    deleteItemAction : (filterItems)=>dispatch(deleteItem(filterItems)),
    updateItemAction : (updatedItems)=>dispatch(updateItem(updatedItems)),
    completedTaskAction : (completedItems)=>dispatch(completedTask(completedItems))

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
