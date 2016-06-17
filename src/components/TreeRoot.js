/*
* @Author: mithril
* @Date:   2016-06-15 15:44:56
* @Last Modified by:   mithril
* @Last Modified time: 2016-06-15 16:15:16
*/

import React, { Component } from 'react';
import TreeNode from '.TreeNode'

export class TreeRoot extends TreeNode {

  // getInitialState() {
  //   return {nodes: this.props.nodes}
  // }

  render() {
    return <TreeNode {...this.props} onClick={ () => {this.handleClick()} } />
  }
}