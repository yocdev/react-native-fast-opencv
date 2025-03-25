import type { Mat } from '../../objects/Objects';

export type Hist = {
  invoke(name: 'calcHist', src: Mat, dst: Mat): void;
  invoke(name: 'compareHist', src1: Mat, src2: Mat): { value: number };
};
