/* @flow */
import type {Ruleset, Character, Component} from "./types";
import Occupation from "./systems/occupation";
import Nationality from "./systems/nationality";
import Deity from "./systems/deity";
import Race from "./systems/race";
import Infancy from "./systems/infancy";

const Rules: Array<Ruleset> = [
  Occupation,
  Nationality,
  Deity,
  Race,
  Infancy,
];

export default Rules;

export const Components: Array<Component> = [].concat.apply(
  [],
  Rules.map((ruleset) => ruleset.components)
);

export function Generate(
  character: Character={}
): Array<Component> {
  let current = Components.filter(
    (component) => !character[component.slot]
  );

  Rules.forEach(rule => {
    current = rule.shrink(character, current)
  });

  return sample(current, 3);
}

function sample<U>(a: Array<U>, n: number): Array<U> {
   if (a.length === 0) {
      return [];
   } else if (a.length <= n) {
      return a;
   } else {
      let result: Array<U> = [];
      let matchedIdx: { [x: number]: boolean} = {};
      let found = 0;

      do {
        // Pick a number
        let num = Math.floor(Math.random() * a.length);

        if (!matchedIdx[num]) {
          matchedIdx[num] = true;
          result.push(a[num])
          found++;
        }
      } while (found < n);

      return result;
   }

}
