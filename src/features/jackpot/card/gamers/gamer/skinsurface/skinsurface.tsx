import { FC, HTMLProps } from 'react';

import { Skin } from '../../../skins';
import type { GamerEntity } from '../../../../../../app/domain/gamer';

import style from './skinsurface.module.sass';

type SkinsSurfaceProps = {
  skins: GamerEntity['skins'];
} & HTMLProps<HTMLDivElement>;

export const SkinsSurface: FC<SkinsSurfaceProps> = ({ skins, ...rest }) => {
  return (
    <div className={style.skins} {...rest}>
      {skins.map((skin) => (
        <Skin {...skin} className={style.skin} />
      ))}
    </div>
  );
};

export default SkinsSurface;
