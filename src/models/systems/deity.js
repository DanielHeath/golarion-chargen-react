/* @flow */
import type { Component, Character } from '../types'

const slot = 'Deity';
const make = (title, body) => {
  return {slot, title, body}
};

const components: Array<Component> = [
  make("No god", "You are disinterested in the divine powers"),
  make("Abadar", "God of Cities, Wealth, Merchants and Law"),
  make("Calistria", "God of Trickery, Lust and Revenge"),
  make("Cayden Cailean", "God of Freedom, Ale, Wine and Bravery"),
  make("Daikitsu", "God of Agriculture, craftsmanship, kitsune and rice"),
  make("Desna", "God of Dreams, Stars, Travelers and Luck"),
  make("Erastil", "God of Farming, Hunting, Trade and Family"),
  make("General Susumu", "God of Archery, Horses, Personal glory and War"),
  make("Gorum", "God of Strength, Battle and Weapons"),
  make("Gozreh", "God of Nature, Weather and The sea"),
  make("Hei Feng", "God of Sea, Storms, Thunder and Wind"),
  make("Iomedae", "God of Valor, Rulership, Justice and Honor"),
  make("Irori", "God of History, Knowledge and Self-perfection"),
  make("Kofusachi", "God of Abundance, Discovery, Happiness and Prosperity"),
  make("Lady Nanyo", "God of Earthquakes, Fire, Plague and Suffering"),
  make("Lao Shu Po", "God of Night, Rats and Thieves"),
  make("Nalinivati", "God of Fertility, Nagaji, Snakes and Sorcery"),
  make("Nethys", "God of Magic"),
  make("Pharasma", "God of Fate, Death, Prophecy and Rebirth"),
  make("Qi Zhong", "God of Healing, Magic and Medicine"),
  make("Sarenrae", "God of Sun, Redemption, Honesty and Healing"),
  make("Shelyn", "God of Beauty, art, love and music"),
  make("Shizuru", "God of Ancestors, Honor, the Sun and Swordplay"),
  make("Sun Wukong", "God of Drunkenness, Nature and Trickery"),
  make("Torag", "God of Forge, protection and strategy"),
  make("Tsukiyo", "God of Jade, the Moon and Spirits"),
  make("Yamatsumi", "God of Mountains, Volcanoes and Winter"),
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
