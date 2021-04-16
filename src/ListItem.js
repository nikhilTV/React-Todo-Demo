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
            value={item.key}
            onClick={(e) => {
              props.addToCompletedTask(e.target.value);
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
            // style={item.checked ? { textDecoration: "line-through" } : {}}
            style={item.checked && { textDecoration: "line-through" }}
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

  return <div>{listItems}</div>;
}

export default ListItem;
