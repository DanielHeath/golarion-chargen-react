/* @flow */
import type { Component, Character } from '../types'

const slot = 'Infancy';
const make = (title, body) => {
  return {slot, title, body}
};

const components: Array<Component> = [
  make("Humble beginnings", "You were raised on a farm"),
  make("Heir", "You were raised in your parents castle"),
  make("Mageling", "You were raised in a wizards tower"),
  make("Wrong side of the tracks", "You were raised in the poor part of town"),
  make("Silver spoon", "You were raised wealthy"),
  make("Sea child", "Your parents were emigrating by sea when you were born"),
  make("Wild child", "Your nomadic parents travelled the forests"),
  make("Foundling", "You were raised in an orphanage"),
  make("Camp follower", "You were raised in an army camp, wherever it went"),
];

function shrink(
  current: Character,
  possibilities: Array<Component>
): Array<Component> {
  return possibilities;
}

export default {
  components,
  shrink,
}
