import type { Mat } from '../../objects/Objects';

export type Hist = {
  invoke(
    name: 'calcHist',
    src: Mat,
    grayImgNum: number,
    grayChannels: number,
    dst: Mat
  ): void;
};
