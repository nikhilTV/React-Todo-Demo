import React from 'react'

import "../../../styles/Todo/tab/Tab.css";

function ActiveTab() {
    return (
        <div>
          <ul className="Todo_Tab">
            <li className="Tab_Link">
              <button className="active">
                    All
            </button>
            </li>
            <li className="Tab_Link">
              <button>
                    Active
                </button>
            </li>
    
            <li className="Tab_Link">
              <button>
                Completed
              </button>
            </li>
          </ul>
        </div>
      );
}

export default ActiveTab
