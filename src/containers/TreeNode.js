/*
* @Author: mithril
* @Date:   2016-06-15 11:09:01
* @Last Modified by:   mithril
* @Last Modified time: 2016-06-17 14:57:49
*/

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import classnames from 'classnames'
import * as NodeActions from '../actions/NodeActions';

// import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

class TreeNode extends Component {
  // constructor(props, context) {
  //   super(props, context)
  //   this.state = { filter: SHOW_ALL }
  // }

  // handleClearCompleted() {
  //   this.props.actions.clearCompleted()
  // }

  // handleShow(filter) {
  //   this.setState({ filter })
  // }

  constructor(props, context) {
    super(props, context)
    this.state = {
      open: false
    }
  }

  handleClick() {
    this.setState({ open: !this.state })
  }

  render() {
    const { nodes, actions } = this.props
    const { filter } = this.state

    return (
        <ul className={classNames('tree-node', { 'open':this.props.open})} onClick={ () => {this.handleClick()} }>
          {nodes.map(node =>
            <TreeNode key={node.id} node={node} {...actions}  />
          )}
        </ul>
    )
  }
}

TreeNode.propTypes = {
  nodes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}


function mapStateToProps(state) {
  return {
    open: state.open
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