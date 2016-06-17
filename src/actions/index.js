/*
* @Author: mithril
* @Date:   2016-06-15 16:22:06
* @Last Modified by:   mithril
* @Last Modified time: 2016-06-15 16:34:03
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


