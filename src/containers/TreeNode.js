/*
* @Author: mithril
* @Date:   2016-06-15 11:09:01
* @Last Modified by:   Kasim
* @Last Modified time: 2016-06-20 23:06:02
*/

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import * as NodeActions from '../actions/NodeActions'

export default class TreeNode extends Component {

  constructor(props, context) {
    super(props, context)
    this.props = {
      open: false,
      nodes: [],
      info:{}
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open })
    if (this.state.open){
      this.actions.getNodes()
    }
  }

  render() {
    const { actions, nodes, info } = this.props
    console.log(this.props)
    console.log(nodes===undefined)
    var children = { nodes ? <div>{nodes.map(node => <TreeNode info={node} actions={actions} />)}</div> : <div>no open</div> }

    return (
      <div className={classNames('tree-node', { 'open':this.props.open})} onClick={ () => {this.handleClick()} }>
        <a>{info.name}</a>
        {children}
      </div>
    );
  }
}

TreeNode.propTypes = {
  info:PropTypes.object.isRequired,
  nodes:PropTypes.array,
  actions: PropTypes.object.isRequired
}



  // handleClearCompleted() {
  //   this.props.actions.clearCompleted()
  // }

  // handleShow(filter) {
  //   this.setState({ filter })
  // }

