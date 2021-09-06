import { FC } from 'react';

import style from './skin.module.sass';

const Skin: FC = () => {
  return (
    <div className={style.skin}>
      <img src="/img/avatarBig.png" alt="avatar" className={style.skinImg} />
    </div>
  );
};
export default Skin;
