/* @flow */
import React from 'react';
// flow:disable not found
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const DURATION = 200;

type Props = {children?: any};

export default class SwipeReplace extends React.Component {

  props: Props;
  state: Props;

  componentWillMount() {
    this.setState({children: this.props.children})
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({children: []});
    setTimeout(
      () => this.setState({children: nextProps.children}),
      DURATION + 100 // Allow time for elements to be really removed.
    )
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="cards"
        transitionAppear={true}
        transitionAppearTimeout={DURATION}
        transitionEnterTimeout={DURATION}
        transitionLeaveTimeout={DURATION}
      >
        {this.state.children}
      </ReactCSSTransitionGroup>
    );
  }
}
