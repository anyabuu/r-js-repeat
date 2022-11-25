import { searchWord } from './tasks/serachWord.js';
import { deleteDuplicates } from './tasks/deleteDuplicates.js';
import { calculate } from './tasks/calculate.js';
import { compare } from './tasks/compare.js';
import { monoArr } from './tasks/monoArr.js';

const string = 'What is the average airspeed velocity of an unladen swallow';
console.log(searchWord(string));

const duplicateArr = [1,2,2,3,1,4,5,4,4];
console.log(deleteDuplicates(duplicateArr));

const arr = [1, 2, 3, 4, 5];
console.log(calculate(arr));

const firstArr = [1, 2, 3];
const secArr = [1, 2, 3];
console.log(compare(firstArr, secArr));

const layerArr = [1, 2, [3, 4, [5]]];
console.log(monoArr(layerArr));
