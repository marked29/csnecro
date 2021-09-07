import { FC, HTMLProps } from 'react';
import Coins from '../../../shared/svg/coins';

import style from './bet-amount.module.sass';

export type BetAmountProps = {
  amount: number;
} & HTMLProps<HTMLDivElement>;

export const BetAmount: FC<BetAmountProps> = ({ amount, ...props }) => {
  return (
    <span className={style.root} {...props}>
      <Coins />
      {amount}
    </span>
  );
};
