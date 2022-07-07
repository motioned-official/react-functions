/**
 * List of strings (or boolean-based strings) can be filtered using Boolean function,
 * then joins into a single string if evaluated true. If multiple arguments are evaluated true, 
 * then the single string is produced with a space between the arguments.
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
export { __classify as classify };