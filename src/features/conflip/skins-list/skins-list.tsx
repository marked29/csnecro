import { FC } from 'react';

import style from './skins-list.module.sass';

export type SkinsListProps = {
  amountToShow?: number;
  skins: string[];
};

export const SkinsList: FC<SkinsListProps> = ({ amountToShow = 10, skins }) => {
  const showed = skins.slice(0, amountToShow);

  const hidden = skins.length - showed.length;

  return (
    <div className={style.root}>
      {showed.map((skin) => (
        <img src={skin} alt="skin" />
      ))}
      {hidden > 0 && <span>+{hidden}</span>}
    </div>
  );
};
