/*
* @Author: mithril
* @Date:   2016-06-15 11:09:01
* @Last Modified by:   mithril
* @Last Modified time: 2016-06-21 14:41:38
*/

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import * as NodeActions from '../actions/NodeActions'

export default class TreeNode extends Component {

  // getInitialState() {
  //     return {nodes:[]};
  // }

  // warning.js?8a56:45 Warning: getInitialState was defined on TreeNode, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?

  constructor(props, context) {
    super(props, context)
    this.props = {
      open: false,
      nodes: [],
      info:{}
    }
  }

  // handleClick() {
  //   console.log(this.state)
  //   this.setState({ open: !this.state.open })
  //   if (this.state.open){
  //     this.actions.getNodes()
  //   }
  // }

  handleClick() {
    let {open} = this.props
    if (open) {
      this.props.actions.closeNode()
    } else {
      this.props.actions.openNode(this.info.path)
    }
  }

  render() {
    const { actions, nodes, info } = this.props

    console.log(this.props)
    console.log(nodes===undefined)

/*    const children = { nodes ? <div>{nodes.map(node => <TreeNode info={node} actions={actions} />)}</div> : <div>no open</div> }


    if (nodes) {
      const children =<div>{nodes.map(node => <TreeNode info={node} />)}</div>
    } else {
      const children = <div>no open</div>
    }*/
        // <div>{nodes.map(node => <TreeNode info={node} />)}</div>

    // const children = { nodes ? <div>{nodes.map(node => <TreeNode info={node} actions={actions} />)}</div> : <div>no open</div> }
    return (
      <div className={classNames('tree-node', { 'open':this.props.open})} onClick={ () => {this.handleClick()} }>
        <a>{info.name}</a>
        {nodes &&
          <div>{nodes.map(node => <TreeNode info={node} />)}</div>
        }
        {!nodes &&
          <div>no children</div>
        }
      </div>
    );
  }
}


TreeNode.propTypes = {
  open:PropTypes.bool,
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

