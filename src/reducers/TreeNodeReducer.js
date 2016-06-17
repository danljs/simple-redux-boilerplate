/*
* @Author: mithril
* @Date:   2016-06-15 16:33:01
* @Last Modified by:   mithril
* @Last Modified time: 2016-06-17 14:25:21
*/

import { OPEN_NODE, CLOSE_NODE } from '../constants/ActionTypes';

const initialState = [
  {
    open: false
  }
]

export default function opener(state = initialState, action) {
  switch (action.type) {
  case OPEN_NODE:
    return true;
  case CLOSE_NODE:
    return false;
  default:
    return state;
  }
}