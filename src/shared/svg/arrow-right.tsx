import { FC, SVGProps } from 'react';

export const ArrowRight: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="9.5"
        y="4.5"
        width="5.79073"
        height="1.44768"
        rx="0.723841"
        transform="rotate(135 9.5 4.5)"
        fill="#32353D"
      />
      <rect
        x="5.40527"
        y="0.405273"
        width="5.79073"
        height="1.44768"
        rx="0.723841"
        transform="rotate(45 5.40527 0.405273)"
        fill="#32353D"
      />
    </svg>
  );
};

export default ArrowRight;
