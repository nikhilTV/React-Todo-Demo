import React, { Component } from 'react'
import './styles/App.css';
import Heading from './Heading';
import ListItem from './ListItem';
import Tab from './Tab';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash,faCheckSquare,faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faTrash,faCheckSquare,faPlus);

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       items:[],
       currentItem:{
         text:"",
         key:"",
         checked:false
       },
       toggleActiveState:1,
       taskWiseItem:[]
    }
    this.handleInput = this.handleInput.bind(this);// binding explicitly 
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.addToCompletedTask = this.addToCompletedTask.bind(this);
    this.showTasks = this.showTasks.bind(this);
  }


  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now(),
        checked:false

      }

    })

  }

  
  addItem(e){
    e.preventDefault();
    const newItem  = this.state.currentItem;
    console.log(newItem);

    if(newItem.text !==""){
      const newItems = [...this.state.items,newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:"",
          key:""
        }
      })
    }

  }


  deleteItem(key){
    // const filteredItems = this.state.items.filter((item)=>{return item.key!==key});
    const filteredItems = this.state.items.filter(item=>item.key!==key);
    const filteredTaskWiseItem = this.state.taskWiseItem.filter(item=>item.key!==key)
    console.log("key",key);
    // console.log("items delete section",items);
    // const filteredItems = items.filter(item=>item.key!==key);
    console.log("filteredItems",filteredItems);

    this.setState({
      items:filteredItems,
      taskWiseItem:filteredTaskWiseItem
    })

  }

  setUpdate(text,key){
    const elements = this.state.items;
    elements.map((item)=>{
          if(item.key === key){
            item.text = text;
          }
    })

    this.setState({
      items:elements
    })

  }

  addToCompletedTask(id){
    const items = this.state.items;
    // console.log(items)
    items.map((item)=>{
      if(item.key === id){
        // console.log(item.checked)
        item.checked = !item.checked
      // console.log(item.text);        
    // console.log(item.checked)
      }
    })
    this.setState({
      items:items
    })
      

  }

  showTasks(index){
    console.log(index);
    // const CompletedTasks = this.state.items.filter(item=>item.checked === true);
    const AllTasks = this.state.items;
    const ActiveTasks = this.state.items.filter(item=> !item.checked);
    const CompletedTasks = this.state.items.filter(item=>item.checked);
    
    console.log("AllTasks",AllTasks);
    console.log("ActiveTasks",ActiveTasks);
    console.log("CompletedTasks",CompletedTasks);

    this.setState({
      toggleActiveState:index
    })
    
    if(index === 2){
      this.setState({
        taskWiseItem:ActiveTasks
      })
    }else if(index === 3){

      this.setState({
        taskWiseItem:CompletedTasks
      })
      
    }else{
      this.setState({
        taskWiseItem:AllTasks
      })

    }

    
      
  }

 
  
  render() {
    return (
      <div className="App">
        <Heading/>
          <form id="todo_form" onSubmit={this.addItem}>
            <input 
            type="text" 
            placeholder="Add Item"
            value={this.state.currentItem.text} 
            onChange={this.handleInput}
            disabled={this.state.toggleActiveState !== 1 ? true : false}
            autoFocus 
            />
            <button type="submit" style={this.state.toggleActiveState !== 1 ?{disabled:true , cursor:"not-allowed"}: {}} >
              <FontAwesomeIcon icon="plus" />
            </button>
              
          </form>
          <Tab showTasks = {this.showTasks} activeState ={this.state.toggleActiveState} />
        <ListItem 
        items = {this.state.toggleActiveState=== 1 ? this.state.items : this.state.taskWiseItem} 
        deleteItem = {this.deleteItem}
        setUpdate = {this.setUpdate}
        addToCompletedTask = {this.addToCompletedTask}
        />
        
      </div>
    )
  }
}


export default App;
