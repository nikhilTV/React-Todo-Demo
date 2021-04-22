import { createStore } from "redux";
import allReducers from '../reducers'   // equal to '../reducers/index.js'

export default  createStore(allReducers);


