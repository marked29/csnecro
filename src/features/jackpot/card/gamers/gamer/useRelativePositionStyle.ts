import { RefObject } from 'react';

export type PositionStyle = {
  top: number;
  left: number;
};

export function useRelativePositionStyle(
  ref: RefObject<HTMLElement>
): PositionStyle | undefined {
  if (!ref.current) {
    return undefined;
  }
  const { height, left } = ref.current.getBoundingClientRect();

  const carouselDims = document
    .getElementsByClassName('alice-carousel')[0]
    .getBoundingClientRect();

  return {
    top: height,
    left: left - carouselDims.left,
  };
}
