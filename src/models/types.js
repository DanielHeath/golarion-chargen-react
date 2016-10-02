/* @flow */

export type Slot =
  'Race' |
  'Infancy' |
  'Childhood' |
  'Nationality' |
  'Deity' |
  'Occupation';

export type Character = { [key: Slot]: Component };

export type Component = {
  title: string,
  body: string,
  slot: Slot,
};

// Rulesets decide which components would be
// valid to add given the current components.
export type Ruleset = {
  components: Array<Component>,
  shrink: (current: Character, possibilities: Array<Component>) => Array<Component>,
};

export const Systems: Array<Ruleset> = [];
