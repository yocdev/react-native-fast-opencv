import type { Mat } from '../../objects/Objects';

export type Hist = { invoke(name: 'calcHist', src: Mat, dst: Mat): void };
