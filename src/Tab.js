import React from 'react'
import './Tab.css'

function Tab(props) {
    return (
        <div >
            
            <ul className="Todo_Tab">
                <li className="Tab_Link"><button className="active">All</button></li>
                <li className="Tab_Link">
                <button>

                        Active
                    </button>
                </li>
                
                
                <li className="Tab_Link">
                    <button onClick={()=>{props.showCompletedTask()}}>
                        Completed
                        </button>
                    </li>
            </ul>
            
            
        </div>
    )
}

export default Tab
