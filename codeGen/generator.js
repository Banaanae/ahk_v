import {ahkgen} from './ahkGen.js';
import * as blocks from './blockDef.js';

export * from './ahkGen.js';

export const ahkGen = new ahkgen();

Object.assign(ahkGen.forBlock,blocks);