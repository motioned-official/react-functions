/**
 * 
 * @param {Array<string>} ...strings list of strings that will be boolean-evaluated.
 * @returns {string} Returns a joined string after boolean-evaluation.
 * @example
 * classify('h', 'i');
 * // => 'hi'
 * classify('Awesome', '', false, '.');
 * // => 'Awesome.'
 * classify('bg-red-400 transition-all', 1 === 0 ? 'text-white' : 'text-blue');
 * // => 'bg-red-400 text-blue'
 */
const __classify : (...strings : string[]) => string = (...strings : string[]) => {
    return strings.filter(Boolean).join(" ");
}
export { __classify };