import React from "react";
import "./ListItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove  from "react-flip-move";

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
            // checked={item.checked ? 'checked' : ''}// it showed an error so used "defaultChecked" property intead of checked

            defaultChecked={item.checked ? 'checked' : ''}
          />

          <input
            className="ListItem_Input"
            type="text"
            value={item.text}
            id={item.key}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
            style={item.checked ? { textDecoration: "line-through" } : {}}
          />

          <span>
            <FontAwesomeIcon
              className="Delete_ListItem"
              onClick={() => props.deleteItem(item.key)}
              icon="trash"
            />
          </span>
        </p>
      </div>
    );
  });

  return (
  <div className="ListItem_Scroll">
    {/* <FlipMove duration={500} easing="ease-in-out"> */}
    {listItems}
    {/* </FlipMove> */}
    </div>
    );
  // return <div>{listItems}</div>;
}

export default ListItem;
