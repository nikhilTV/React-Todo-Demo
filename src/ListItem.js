import React, { Component } from 'react'
import './ListItem.css'

function ListItem(props) {
    const items = props.items;
    const listItems = items.map((item)=>{
        return <div className="list" key={item.key}>
            <p>
            <input 
            type="text" 
            value={item.text} 
            id={item.key}
            onChange={
                (e)=>{
                    props.setUpdate(e.target.value , item.key)

                }
            }
            />
            <span>
                <button 
                className="Delete_ListItem" 
                onClick={()=>props.deleteItem(item.key)}
                >
                    Delete
                </button>
            </span>
            </p>

        </div>
        
    })

    return(
        <div>{listItems}</div>
    )
        
    
}

export default ListItem
