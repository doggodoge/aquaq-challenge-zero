import { getData, parseCodes } from './utils/mod.ts';

const data = getData('data/input.txt');
const codes = parseCodes(data);

const t9Map = new Map<number, string[]>();
t9Map.set(2, ['a', 'b', 'c']);
t9Map.set(3, ['d', 'e', 'f']);
t9Map.set(4, ['g', 'h', 'i']);
t9Map.set(5, ['j', 'k', 'l']);
t9Map.set(6, ['m', 'n', 'o']);
t9Map.set(7, ['p', 'q', 'r', 's']);
t9Map.set(8, ['t', 'u', 'v']);
t9Map.set(9, ['w', 'x', 'y', 'z']);
t9Map.set(0, [' ']);

const decodedMessage = codes
  .map((code) => {
    return t9Map?.get(code.key)?.at(code.repeat - 1) ?? '';
  })
  .join('');

console.log(decodedMessage);
