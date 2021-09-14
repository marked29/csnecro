import { RefObject, useRef, useEffect, FC } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(
  ref: RefObject<HTMLDivElement>,
  onClickOutside: VoidFunction
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Element)) {
        onClickOutside();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
export type ClickOutsideListenerProps = {
  onClickOutside: VoidFunction;
};

export const ClickOutsideListener: FC<ClickOutsideListenerProps> = ({
  children,
  onClickOutside,
}) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, onClickOutside);

  return <div ref={wrapperRef}>{children}</div>;
};
