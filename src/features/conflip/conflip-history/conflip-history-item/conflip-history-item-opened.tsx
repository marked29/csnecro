import { FC } from 'react';
import { Button } from '../../../../shared/components/button';
import { BetAmount } from '../../bet-amount';
import { SkinsList } from '../../skins-list';
// import { BetAmount } from '../bet-amount';
import { HistoryUserAvatar } from '../history-user-avatar';

import style from './conflip-history-item-opened.module.sass';

const SKIN = ['/img/skin.png'];

const SKINS = [
  SKIN,
  SKIN,
  SKIN,
  SKIN,
  SKIN,
  SKIN,
  SKIN,
  SKIN,
  SKIN,
  SKIN,
].flat();

const MOCK_USERS = [
  {
    bet: 10,
    winner: false,
    avatar: '/img/avatarBig.png',
    lvl: 25,
    skins: SKINS,
  },
  {
    bet: 12,
    winner: true,
    avatar: '/img/avatarBig.png',
    lvl: 25,
    skins: [SKINS, SKINS].flat(2),
  },
];

export type ConflipHistoryItemOpenedProps = {
  onHideSkins: VoidFunction;
};

export const ConflipHistoryItemOpened: FC<ConflipHistoryItemOpenedProps> = ({
  onHideSkins,
}) => {
  return (
    <>
      <div className={style.buttons}>
        <Button size="sm">View</Button>
        <Button size="sm" onClick={onHideSkins}>
          Hide skins
        </Button>
      </div>

      {MOCK_USERS.map(({ winner, avatar, lvl, skins, bet }) => (
        <div className={style.user}>
          <div className={style.details}>
            <HistoryUserAvatar
              winner={winner}
              avatar={avatar}
              className={style.avatar}
            />
            <span className={style.levelLabel}>{lvl}</span>
          </div>
          <div className={style.skinsBet}>
            <SkinsList skins={skins} amountToShow={7} />
            <span className={style.bet}>
              <BetAmount amount={bet} />
            </span>
          </div>
        </div>
      ))}
      {/* <BetAmount amount={totalBet} /> */}
    </>
  );
};
