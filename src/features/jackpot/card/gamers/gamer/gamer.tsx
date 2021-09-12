import { FC, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import cn from 'classnames';

import Wrapper from '../../../../../shared/components/wrapper/wrapper.component';
import Button from '../../../../../shared/components/button/button.component';
import { Skin } from '../../skins';
import type { GamerEntity } from '../../../../../app/domain/gamer';

import style from './gamer.module.sass';

type GamerProps = {
  className?: string;
} & GamerEntity;

export const Gamer: FC<GamerProps> = ({
  className,
  userName,
  deposit,
  percentage,
  lvl = 23,
  skins,
}) => {
  const [isSkinsShown, setIsSkinsShown] = useState(false);

  return (
    <div className={cn(style.root, className)}>
      <Wrapper paddingSize="md" className={style.userCard}>
        <div className={style.name}>
          <h4>{userName}</h4>
          <span className={style.percent_title}>
            Percent: <p className={style.percent}>{percentage}</p>
          </span>
        </div>
        <div className={style.avatar}>
          <p className={style.lvl}>{lvl}</p>
          <img src="/img/avatarBig.png" alt="avatar" data-tip={userName} />
          <p className={style.deposit}>{deposit}</p>
          <ReactTooltip />
        </div>
        <Button
          size="sm"
          onClick={() => setIsSkinsShown(!isSkinsShown)}
          className={style.btn}
        >
          {isSkinsShown ? 'Hide skins' : 'Show skins'}
        </Button>
      </Wrapper>

      {isSkinsShown && (
        <div className={style.skins}>
          {skins.map((skin) => (
            <Skin {...skin} className={style.skin} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gamer;
