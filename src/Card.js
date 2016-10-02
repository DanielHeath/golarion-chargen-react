/* @flow */
import React from 'react';
import './Card.css';
import type {Component} from "./models/types";

export default class Card extends React.Component {
  props: Component & {onClick?: Function};

  render() {
    return (
      <div
        onClick={this.props.onClick}
        className={"card " + this.props.slot}
      >
        <div className="title">
          {this.props.title}
          <span className="slot">{this.props.slot}</span>
        </div>
        { this.props.body &&
          [
            <hr key={0} />,
            <div key={1} className="body">{this.props.body}</div>,
          ]
        }
      </div>
    );
  }
}
