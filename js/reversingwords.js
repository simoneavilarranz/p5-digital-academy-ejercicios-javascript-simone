export function reversingWords(str) {
  const limpio = str.trim().replace(/\s+/g, ' ');
  if (!limpio) return '';
  return limpio.split(' ').reverse().join(' ');
}