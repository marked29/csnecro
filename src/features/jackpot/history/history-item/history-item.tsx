import { FC, useCallback, useState } from 'react';

import Games from '../games/games';
import { Header } from '../header';
import type { GamerEntity } from '../../../../app/domain/gamer';

import style from './history-item.module.sass';

export type HistoryItemProps = {
  gamers: GamerEntity[];
};

export const HistoryItem: FC<HistoryItemProps> = ({ gamers }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const onToggleCard = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  const gamersToShow = isExpanded ? gamers : gamers.slice(0, 3).filter(Boolean);

  return (
    <div className={style.root}>
      <Header isExpanded={isExpanded} onToggleCard={onToggleCard} />
      <Games gamers={gamersToShow} />
    </div>
  );
};

export default HistoryItem;
