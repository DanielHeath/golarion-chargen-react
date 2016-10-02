/* @flow */
import type { Component, Character } from '../types'

const slot = 'Occupation';
const make = (title, body) => {
  return {slot, title, body}
};

const components: Array<Component> = [
  make("Priest(ess)", ""),
  make("Artist", ""),
  make("Mercenary", ""),
  make("Farmer", ""),
  make("Criminal", ""),
  make("Entertainer", ""),
  make("Rebel", ""),
  make("Bounty Hunter", ""),
  make("Merchant", ""),
  make("Noble", ""),
  make("Scholar", ""),
  make("Sailor", ""),
  make("Pirate", ""),
  make("Slave", ""),
  make("Soldier", ""),
  make("Mercenary", ""),
  make("Knight", ""),
  make("Tailor", ""),
  make("Spy", ""),
  make("Servant", ""),
  make("Mage", ""),
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
