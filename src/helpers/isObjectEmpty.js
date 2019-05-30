/**
 * Checks if an object is empty or not
 * @param {Object} obj
 * @example isObjectEmpty({ answer: "no" });
 * @returns false
 */
function isObjectEmpty(obj) {
  if (Object.keys(obj).length === 0) return true
  return false
}

export default isObjectEmpty
