import { FC } from 'react';

type IconProps = {
  className?: string;
};

const English: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M-5 16V0H27V16H-5Z" fill="#012169" />
      <path d="M-5 16L27 0L-5 16ZM27 16L-5 0L27 16Z" fill="black" />
      <path
        d="M7.42226 8.00007L-5.71558 14.569L-4.28449 17.4312L11 9.78893L26.2844 17.4312L27.7155 14.569L14.5777 8.00007L27.7155 1.43116L26.2844 -1.43101L11 6.21122L-4.28449 -1.43101L-5.71558 1.43116L7.42226 8.00007Z"
        fill="white"
      />
      <path d="M-5 16L27 0L-5 16ZM27 16L-5 0L27 16Z" fill="black" />
      <path
        d="M8.61484 8.00005L-5.47705 15.046L-4.523 16.9541L11 9.19262L26.5229 16.9541L27.477 15.046L13.3851 8.00005L27.477 0.954106L26.5229 -0.954004L11 6.80748L-4.523 -0.954004L-5.47705 0.954106L8.61484 8.00005Z"
        fill="#C8102E"
      />
      <path d="M11 16V0V16ZM-5 8H27H-5Z" fill="black" />
      <path
        d="M13.6667 5.33333V0H8.33333V5.33333H-5V10.6667H8.33333V16H13.6667V10.6667H27V5.33333H13.6667Z"
        fill="white"
      />
      <path d="M11 16V0V16ZM-5 8H27H-5Z" fill="black" />
      <path
        d="M12.6 6.4V0H9.4V6.4H-5V9.6H9.4V16H12.6V9.6H27V6.4H12.6Z"
        fill="#C8102E"
      />
    </svg>
  );
};

export default English;
