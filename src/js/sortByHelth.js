/* eslint-disable linebreak-style */
export default function sortByHelth(heros) {
  heros.sort((prev, next) => prev.health - next.health);
  heros.reverse()
  console.log(heros);
  return heros;
}
