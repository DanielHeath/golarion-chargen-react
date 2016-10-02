/* @flow */
import React from 'react';
import './Cards.css';
import Card from "./Card";
import SwipeReplace from "./SwipeReplace";
import type {Component} from "./models/types";

export default class Cards extends React.Component {
  props: {
    options: Array<Component>,
    onSelect: (x: Component) => void,
  };

  render() {
    const items = this.props.options.map((card, idx) =>
      <SwipeReplace key={idx}>
        <Card
          {...card}
          onClick={() => this.props.onSelect(card)}
        />
      </SwipeReplace>
    );

    return (
      <div className="options">
        {items}
      </div>
    );
  }
}
