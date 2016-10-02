/* @flow */
import type { Component, Character } from '../types'

const slot = 'Nationality';
const make = (title, body) => {
  return {slot, title, body}
};

const components: Array<Component> = [
  // Garund
  make("Alkenstar", ""),
  make("Geb", ""),
  make("Jalmeray", ""),
  make("Katapesh", ""),
  make("The Mwangi Expanse", ""),
  make("Nex", ""),
  make("Osirion", ""),
  make("The Shackles", ""),
  make("The Sodden Lands", ""),
  make("Thuvia", ""),
  // Avistan
  make("Absalom", ""),
  make("Andoran", ""),
  make("Cheliax", ""),
  make("Galt", ""),
  make("Hermea", ""),
  make("The Hold of Belkzen", ""),
  make("The Lands of the Linnorm Kings", ""),
  make("Mendev", ""),
  make("Qadira", ""),
  make("The Realm of the Mammoth Lords", ""),
  make("The River Kingdoms", ""),
  make("Taldor", ""),
  make("Thassilon", ""),
  make("Ustalav", ""),
  make("Varisia", ""),
  make("The Worldwound", ""),
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
