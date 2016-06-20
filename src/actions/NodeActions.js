/*
* @Author: mithril
* @Date:   2016-06-17 14:50:45
* @Last Modified by:   mithril
* @Last Modified time: 2016-06-20 11:27:04
*/

import { OPEN_NODE, CLOSE_NODE } from '../constants/ActionTypes';

export function openNode() {
  return {
    type: OPEN_NODE
  };
}

export function closeNode() {
  return {
    type: CLOSE_NODE
  };
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


export function getFileList() {
  return {
    nodes: testNodes
  }
}

export function getChildren() {
  return {
    nodes: testNodes
  }
}

export function ansyncGetChildren() {
  return dispatch => {
    setTimeout(() => {
      dispatch(getChildren());
    }, 1000);
  };
}