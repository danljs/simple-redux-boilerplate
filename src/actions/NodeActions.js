/*
* @Author: mithril
* @Date:   2016-06-17 14:50:45
* @Last Modified by:   mithril
* @Last Modified time: 2016-06-21 14:43:43
*/

import { OPEN_NODE, CLOSE_NODE, GET_NODES } from '../constants/NodeActionTypes';

export function openNode(path) {
  return {
    type: OPEN_NODE,
    path: path
  };
}

export function closeNode() {
  return {
    type: CLOSE_NODE
  };
}


export function getNodes(path) {
  return {
    type: GET_NODES,
    path: path
  };
}