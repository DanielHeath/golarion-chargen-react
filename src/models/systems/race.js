/* @flow */
import type { Component, Character } from '../types'

const slot = 'Race';
const make = (title, body) => {
  return {slot, title, body}
};

const components: Array<Component> = [
  make("Human", ""),
  make("Half-elf", ""),
  make("Half-orc", ""),
  make("Dwarf", ""),
  make("Elf", ""),
  make("Orc", ""),
  make("Halfling", ""),
  make("Gnome", ""),
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
