import { RefObject, useRef, useEffect, FC } from 'react';

function useClickOutsideListener(
  ref: RefObject<HTMLElement>,
  onClickOutside: VoidFunction
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Element)) {
        onClickOutside();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

export type ClickOutsideListenerProps = {
  onClickOutside: VoidFunction;
};

export const ClickOutsideListener: FC<ClickOutsideListenerProps> = ({
  children,
  onClickOutside,
}) => {
  const wrapperRef = useRef(null);
  useClickOutsideListener(wrapperRef, onClickOutside);

  return <div ref={wrapperRef}>{children}</div>;
};
