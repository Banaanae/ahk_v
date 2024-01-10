import {ahkgen} from './ahkGen.js';
import * as blocks from './blockDef.js';

export * from './ahkGen.js';

export const ahkGen = new ahkgen();
console.log(ahkGen)
console.log(ahkGen.forBlock)
console.log(blocks)
Object.assign(ahkGen.forBlock,blocks);