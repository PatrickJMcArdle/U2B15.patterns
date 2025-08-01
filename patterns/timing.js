/**
 * @param {string[]} playlist
 * @param {string} song
 * @returns {boolean} whether `song` is in `playlist`
 * @returns `false` if `playlist` is empty
 */
export function isSongInPlaylist(playlist, song) {
  for (const songInPlaylist of playlist) {
    if (songInPlaylist === song) {
      return true;
    }
  }
  return false;
}

/**
 * @param {number[]} numbers
 * @returns {boolean} whether all `numbers` are even
 * @returns `undefined` if `numbers` is empty
 */
export function isAllEven(numbers) {
  if(numbers.length === 0) {
    return undefined
  } else {
    let truth = 0;
    for(const number of numbers) {
      if(number % 2 !== 0) {
        return false;
      }
    }
  }
  return true;
} 


/**
 * You're in charge of a group camping trip. You've packed supplies in a backpack,
 * and each item in the backpack has a category, such as "food", "equipment", or "clothes".
 * Each item in the "food" category is enough to feed one person.
 *
 * @param {{category: string}[]}} backpack
 * @param {number} people
 * @returns {boolean} whether there is enough food in the backpack to feed everyone
 */
export function haveEnoughFood(backpack, people) {
  if(people === 0) {
    return true;
  } else if(backpack.length === 0 && people > 0) {
    return false;
  } else {
    const foodItems = backpack.filter(item => item.category === "food");
    const foodCount = foodItems.length;
    return foodCount >= people;
  }
}
