import { FC } from 'react';
import { Button } from '../../../../shared/components/button';
import { BetAmount } from '../../bet-amount';
import { HistoryUserAvatar } from '../history-user-avatar';

import style from './conflip-history-item-closed.module.sass';

const MOCK_USERS = [
  { bet: 10, winner: false, avatar: '/img/avatarBig.png', lvl: 25 },
  { bet: 12, winner: true, avatar: '/img/avatarBig.png', lvl: 25 },
];

export type ConflipHistoryItemClosedProps = {
  onShowSkins: VoidFunction;
  hideDetails: boolean;
};

export const ConflipHistoryItemClosed: FC<ConflipHistoryItemClosedProps> = ({
  onShowSkins,
  hideDetails,
}) => {
  const totalBet = MOCK_USERS.reduce((sum, user) => sum + user.bet, 0);

  return (
    <>
      <div className={style.avatars}>
        {MOCK_USERS.map(({ winner, avatar }) => (
          <HistoryUserAvatar
            winner={winner}
            avatar={avatar}
            className={style.avatar}
          />
        ))}
      </div>
      {!hideDetails && (
        <>
          <BetAmount amount={totalBet} />
          <div className={style.buttons}>
            <Button size="sm">View</Button>
            <Button size="sm" onClick={onShowSkins}>
              Show skins
            </Button>
          </div>
        </>
      )}
    </>
  );
};
