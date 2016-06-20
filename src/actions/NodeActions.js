/*
* @Author: mithril
* @Date:   2016-06-17 14:50:45
* @Last Modified by:   mithril
* @Last Modified time: 2016-06-20 15:51:09
*/

import { OPEN_NODE, CLOSE_NODE, GET_NODES } from '../constants/NodeActionTypes';

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


export function getNodes() {
  return {
    type: GET_NODES
  };
}