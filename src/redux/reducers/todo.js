import {HANDLE_INPUT, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM} from '../actions/actionType'

    const initialState = {
      items:[],
      currentItem:{
        text:"",
        key:"",
        checked:false
      },
      toggleActiveState:1,
      taskWiseItem:[]
   };


   export default function(state = initialState, action){
       switch(action.type){
           case HANDLE_INPUT :
            //    const {text} = action.payload.currentItem;
               const {text,key,checked} = action.payload.currentItem ;
               return{
                   ...state,
                   currentItem:{
                       ...state.currentItem,
                        text:text,
                        key:key,
                        checked:checked
                   },
               }
            
            case ADD_ITEM :
                // const {items} = action.payload;
                const item = action.payload.items;
                return{
                    ...state,
                    // items:items,
                    items:[...state.items,item],
                    currentItem:{
                        // ...state.currentItem,
                        text:"",
                        key:"",
                        checked:""

                    }

                }

                case DELETE_ITEM :
                    return{
                        ...state,

                    }


            default : 
                return state


       }

   }


