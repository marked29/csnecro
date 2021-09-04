import { FC } from 'react';

const Arrow: FC = () => {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'relative', top: '3px' }}
    >
      <rect
        x="4.50006"
        y="1.5"
        width="5.79073"
        height="1.44768"
        rx="0.723841"
        transform="rotate(45 4.50006 1.5)"
        fill="#A2A2A2"
      />
      <rect
        x="0.405334"
        y="5.5946"
        width="5.79073"
        height="1.44768"
        rx="0.723841"
        transform="rotate(-45 0.405334 5.5946)"
        fill="#A2A2A2"
      />
    </svg>
  );
};

export default Arrow;
