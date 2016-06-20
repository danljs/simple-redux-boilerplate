/*
* @Author: mithril
* @Date:   2016-06-15 16:33:01
* @Last Modified by:   mithril
* @Last Modified time: 2016-06-20 16:34:43
*/

import { OPEN_NODE, CLOSE_NODE, GET_NODES } from '../constants/NodeActionTypes';

const initialState = {
  open: false,
  nodes: [],
  info: {}
}

// class NodeModel {
//     constructor(name, path, type, right) {
//         this.name = name;
//         this.path = path;
//         this.type = type;
//         this.right = right;
//     }
// }

// const testNodes = [
//   new NodeModel('t1','t1', 'd', '777'),
//   new NodeModel('t2','t2', 'd', '447'),
//   new NodeModel('t3','t3', 'd', '667'),
// ]


const testNodes = [
  {name:'t1',type:'t1'},
  {name:'t2',type:'t2'},
  {name:'t3',type:'t3'},
]


function getFileList() {
  return {
    nodes: testNodes
  }
}


export default function opener(state = initialState, action) {
  switch (action.type) {
  case OPEN_NODE:
    var {nodes} = getFileList()  // 这里不能用let，否则会出现 Duplicate declaration ，估计是 scope的问题
    return {
      ...state,
      open:true,
      nodes:nodes
    };
  case CLOSE_NODE:
    return {
      ...state,
      open:false
    };
  case GET_NODES:
    var {nodes} = getFileList()
    return {
      ...state,
      nodes:nodes
    };
  default:
    return state;
  }
}



export function ansyncGetFileList() {
  return dispatch => {
    setTimeout(() => {
      dispatch(getChildren());
    }, 1000);
  };
}