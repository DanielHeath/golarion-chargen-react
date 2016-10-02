/* @flow */
import React from 'react';
import './App.css';
import Card from './Card.js';
import {Generate} from "./models";
import type {Character, Component} from "./models/types";

export default class App extends React.Component {
  state: {
    character: Character,
    cards: Array<Component>,
  };

  constructor() {
    super();
    this.state = {
      cards: Generate(),
      character: {}
    };
  }

  pickCard = (card: Component) => {
    let character = this.state.character
    character[card.slot] = card;
    this.setState({
      cards: Generate(this.state.character),
      character
    })
    this.forceUpdate();
  }

  render() {
    let char = this.state.character;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div className="options">
          {this.state.cards.map((card, idx) =>
            <Card
              {...card}
              key={idx}
              onClick={() => this.pickCard(card)}
            />
          )}
        </div>
        <div className="character">
          {values(char).map((component, idx) =>
            <div
              className="component"
              key={idx}
            >
              <span className="slot">
                {component.slot}
              </span>: <span className="title">
                {component.title}
              </span> (<span className="body">
                {component.body}
              </span>)
            </div>

          )}
        </div>
      </div>
    );
  }
}

function values<U>(obj: {[x: any]: U}): Array<U> {
  return Object.keys(obj).map((k) => obj[k])
}
