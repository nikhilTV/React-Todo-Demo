import {HANDLE_INPUT, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM,COMPLETED_TASK} from './actionType'



export const handleInput = (inputValue)=>{
    return{
        type: HANDLE_INPUT,
        payload:{
            currentItem:{
                text:inputValue,
                key:Date.now(),
                checked:false
        
              }
        }
    }

}

export const addItem = (newItem) => {
    // console.log("newItem - at action", newItem)
    return{
        type: ADD_ITEM,
        payload:{
            items : newItem
        }
    }
}

export const deleteItem = (filterItems) => {
    return{
        type: DELETE_ITEM,
        payload:{
            items:filterItems
        }
    }
}
export const updateItem = (updatedItems) => {
    return{
        type: UPDATE_ITEM,
        payload:{
            // items:[...updatedItems ] // to append each text or value to previous value
            items:updatedItems
        }
    }
}


export const addToCompletedTask = () => {
    return{
        type: COMPLETED_TASK,
        payload:{
            
        }
    }
}


// export const showTasks = () => {
//     return{
//         type: HANDLE_INPUT
//     }
// }
