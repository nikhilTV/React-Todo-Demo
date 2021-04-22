import {HANDLE_INPUT, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM} from './actionType'



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

export const deleteItem = () => {
    return{
        type: DELETE_ITEM
    }
}
export const setUpdate = () => {
    return{
        type: UPDATE_ITEM
    }
}
// export const addToCompletedTask = () => {
//     return{
//         type: HANDLE_INPUT
//     }
// }
// export const showTasks = () => {
//     return{
//         type: HANDLE_INPUT
//     }
// }
