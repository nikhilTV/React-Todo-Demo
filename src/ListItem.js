import React from "react";
import "./ListItem.css";

const styles = {
  done: {
    textDecoration: "line-through",
  },
};

function ListItem(props) {
  const items = props.items;
  
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="checkbox"
            id={item.key}
            onClick={(e) => {
              // console.log(e.target);
              props.addToCompletedTask(e.target.id);
              // console.log(item.checked)
            }}
          />

          <input
            type="text"
            value={item.text}
            id={item.key}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
            style={item.checked ? { textDecoration: "line-through" } : {}}
          />

          <span>
            <button
              className="Delete_ListItem"
              onClick={() => props.deleteItem(item.key)}
            >
              &times;
            </button>
          </span>
        </p>
      </div>
    );
  });

  return <div className="ListItem_Scroll">{listItems}</div>;
  // return <div>{listItems}</div>;
}

export default ListItem;
