/* @flow */
import type { Component, Character } from '../types'

const slot = 'Childhood';
const make = (title, body) => {
  return {slot, title, body}
};

const components: Array<Component> = [
  make("", ""),
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
