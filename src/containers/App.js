import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import TreeNode from '../containers/TreeNode';
import Home from '../containers/Home';
import * as NodeActions from '../actions/NodeActions'

export default class App extends Component {

  componentWillMount() {
    // this will update the nodes on state
    this.props.actions.getNodes();
  }

  render() {
    const { nodes } = this.props
    console.log(nodes)
    return (
      <div className="main-app-container">
        <Home />
        <div className="main-app-nav">Simple Redux Boilerplate</div>
        <div>
          {nodes.map(node =>
            <TreeNode key={node.name} info={node} />
          )}
        </div>

        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    nodes: state.opener.nodes
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
)(App);

