import cn from 'classnames';
import { FC, useCallback, useState } from 'react';

import { ConflipHistoryItemClosed } from './conflip-history-item-closed';
import { ConflipHistoryItemOpened } from './conflip-history-item-opened';

import style from './conflip-history-item.module.sass';

export type ConflipHistoryItemProps = {
  hideDetails: boolean;
};

export const ConflipHistoryItem: FC<ConflipHistoryItemProps> = ({
  hideDetails,
}) => {
  const [isSkinsShown, setIsSkinsShown] = useState(false);

  const onHideSkins = useCallback(() => setIsSkinsShown(false), []);
  const onShowSkins = useCallback(() => setIsSkinsShown(true), []);

  if (isSkinsShown) {
    return (
      <div className={cn(style.root, style.skinsOpened)}>
        <ConflipHistoryItemOpened onHideSkins={onHideSkins} />
      </div>
    );
  }

  return (
    <div className={style.root}>
      <ConflipHistoryItemClosed
        onShowSkins={onShowSkins}
        hideDetails={hideDetails}
      />
    </div>
  );
};
