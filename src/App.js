import React, { Component } from 'react'
import './styles/App.css';
import Heading from './Heading';
import ListItem from './ListItem';
import Tab from './Tab';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       items:[],
       currentItem:{
         text:"",
         key:"",
         checked:false
       }
    }
    this.handleInput = this.handleInput.bind(this);// binding explicitly 
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.addToCompletedTask = this.addToCompletedTask.bind(this);
    this.showCompletedTask = this.showCompletedTask.bind(this);
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

    this.setState({
      items:filteredItems
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
      if(item.key == id){
        // console.log(item.checked)
        item.checked = !item.checked
      console.log(item.text);        
    // console.log(item.checked)
      }
    })
    this.setState({
      items:items
    })
      

  }

  showCompletedTask(){
    const filteredItems = this.state.items.filter(item=>item.checked ===true);

    this.setState({
      items:filteredItems
    })
      
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
            />
            <button className="todo" type="submit">Add</button>

          </form>
          <Tab showCompletedTask = {this.showCompletedTask}/>
        <ListItem 
        items = {this.state.items} 
        deleteItem = {this.deleteItem}
        setUpdate = {this.setUpdate}
        addToCompletedTask = {this.addToCompletedTask}
        />
        
      </div>
    )
  }
}


export default App;
