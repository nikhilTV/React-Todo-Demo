import React, { Component } from 'react'
import './App.css';
import ListItem from './ListItem';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       items:[],
       currentItem:{
         text:"",
         key:""
       }
    }
    this.handleInput = this.handleInput.bind(this);// binding explicitly 
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }


  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
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
  
  render() {
    return (
      <div className="App">
        <header>
          <form id="todo_form" onSubmit={this.addItem}>
            <input 
            type="text" 
            placeholder="Add Item"
            value={this.state.currentItem.text} 
            onChange={this.handleInput}
            />
            <button className="todo" type="submit">Add</button>

          </form>
        </header>
        <ListItem 
        items = {this.state.items} 
        deleteItem = {this.deleteItem}
        setUpdate = {this.setUpdate}
        />

        
      </div>
    )
  }
}


export default App;
