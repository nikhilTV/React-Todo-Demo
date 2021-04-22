import React, { Component } from 'react'
import { connect } from 'react-redux'
import {} from  '../../../redux/actions/action'
import "../../../styles/Todo/list/ListItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export class ListItem extends Component {
    constructor(props) {
        super(props)
        // this.listItems = this.listItems.bin(this)
        
        // this.todoItems = 2;
    }

    listItems = () =>{
    // console.log(this.props.todoItems);
    const items = this.props.todoItems;
    const listItems = items.map((item)=>{
        return (
            <div className="list" key={item.key}>
              <p>
                <input
                  type="checkbox"
                //   id={item.key}
      
                //   defaultChecked={item.checked ? 'checked' : ''}
                />
      
                <input
                  className="ListItem_Input"
                  type="text"
                  value={item.text}
                //   id={item.key}
                  
                />
      
                <span>
                  <FontAwesomeIcon
                    className="Delete_ListItem"
                    icon="trash"
                  />
                </span>
              </p>
            </div>
          );

    })

    return listItems;

        
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
    // console.log("state at ListItem ",state);
    const {items} = state.todoReducer;
    console.log("states - item Array",items);

    return {

        todoItems : items
    }
}

const mapDispatchToProps = (dispatch) => {
    

}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
