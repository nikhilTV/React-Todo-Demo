import { combineReducers} from 'redux'
import todoReducer from './todo'
// import seond_Reducer fom './file_payh and name'



// if more than one reducer use "combineReducers" else use if single reducer use "createStore"
 // const store = createStore(action_1) - this work
 // const store = createStore(action_1,action_2,...) - this not gonna work
 // so use combineReducers to add all reducers at once so we can pass it as a single argument to createStore

 //  const allReducers or rootReducers
 

// const allReducers = combineReducers({
//     //  todo :todoReducer //way 1
//     // todoReducer :todoReducer //wa2 : can be written as "todoReducer" as syntatic sugar in ES6

//     todoReducer // way 3

// });


const allReducers = combineReducers({todoReducer})


export default allReducers;




 