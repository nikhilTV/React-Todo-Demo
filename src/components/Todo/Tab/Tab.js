import React from "react";
import "../../../styles/Todo/tab/Tab.css";

function Tab(props) {
  return (
    <div>
      <ul className="Todo_Tab">
        <li className="Tab_Link">
          <button className={props.activeState===1 ? "active" : {}} onClick={() => {
              props.showTasks(1);
            }}
            >
                All
        </button>
        </li>
        <li className="Tab_Link">
          <button className={props.activeState===2 ? "active" : {}} onClick={() => {
              props.showTasks(2);
            }}
            >
                Active
            </button>
        </li>

        <li className="Tab_Link">
          <button className={props.activeState===3 ? "active" : {}}
            onClick={() => {
              props.showTasks(3);
            }}
          >
            Completed
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Tab;
