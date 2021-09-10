import { FC, SVGProps } from 'react';

const ArrowDown: FC<SVGProps<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="4.49994"
        y="8.5"
        width="5.79073"
        height="1.44768"
        rx="0.723841"
        transform="rotate(-135 4.49994 8.5)"
        fill="#A2A2A2"
      />
      <rect
        x="8.59467"
        y="4.40533"
        width="5.79073"
        height="1.44768"
        rx="0.723841"
        transform="rotate(135 8.59467 4.40533)"
        fill="#A2A2A2"
      />
    </svg>
  );
};

export default ArrowDown;
