/*
* @Author: mithril
* @Date:   2016-06-15 11:09:01
* @Last Modified by:   mithril
* @Last Modified time: 2016-06-20 17:08:24
*/

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import * as NodeActions from '../actions/NodeActions'

// import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

class TreeNode extends Component {

  // handleClearCompleted() {
  //   this.props.actions.clearCompleted()
  // }

  // handleShow(filter) {
  //   this.setState({ filter })
  // }

  // constructor(props, context) {
  //   super(props, context)
  //   this.state = {
  //     open: false
  //   }
  // }

  handleClick() {
    this.setState({ open: !this.state.open })
    if (this.state.open){
      this.actions.getNodes()
    }
  }

  render() {
    const { actions, nodes, info } = this.props

    if (nodes) {
      const children =<div>{nodes.map(node => <TreeNode info={node} />)}</div>
    } else {
      const children = <div>no open</div>
    }

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
  actions: PropTypes.object.isRequired
}


function mapStateToProps(state) {
  return {
    open: state.open,
    info: state.info,
    nodes: state.nodes
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NodeActions, dispatch)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeNode);