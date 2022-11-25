import { wordSearch } from './tasks/wordSearch';
import { deleteDuplicate } from './tasks/deleteDuplicate';
import { calculate } from './tasks/calculate';
import { compare } from './tasks/compare';
import { monoArr } from './tasks/monoArr';

const string = 'What is the average airspeed velocity of an unladen swallow';
console.log(wordSearch(string));

const duplicateArr = [1,2,2,3,1,4,5,4,4];
console.log(deleteDuplicate(duplicateArr));

const arr = [1, 2, 3, 4, 5];
console.log(calculate(arr));

const firstArr = [1, 2, 3];
const secArr = [1, 2, 3];
console.log(compare(firstArr, secArr));

const layerArr = [1, 2, [3, 4, [5]]];
console.log(monoArr(layerArr));
