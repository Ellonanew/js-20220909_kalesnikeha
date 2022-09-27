/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const args = [...fields];

  const object = {};

  for (const item of args) {
    if (obj.hasOwnProperty(item)) {
      object[item] = obj[item];
    }
  }

  return object;
};
