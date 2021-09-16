import { FC, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import ReactTooltip from 'react-tooltip';
import cn from 'classnames';

import Wrapper from '../../../../../shared/components/wrapper/wrapper.component';
import Button from '../../../../../shared/components/button/button.component';
import { ClickOutsideListener } from '../../../../../shared/hooks/click-outside-listener/ClickOutsideListener';
import { useRelativePositionStyle } from './useRelativePositionStyle';
import SkinsSurface from './skinsurface/skinsurface';

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
  const gamerRef = useRef<HTMLDivElement>(null);
  const stylePosition = useRelativePositionStyle(gamerRef);
  const shouldShowSkins = isSkinsShown && !!gamerRef.current;

  return (
    <Wrapper
      ref={gamerRef}
      paddingSize="md"
      className={cn(style.root, className)}
    >
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
      {shouldShowSkins &&
        createPortal(
          <ClickOutsideListener
            onClickOutside={() => {
              setIsSkinsShown(false);
            }}
          >
            <SkinsSurface skins={skins} style={stylePosition} />
          </ClickOutsideListener>,
          document.getElementsByClassName('alice-carousel')[0] as Element
        )}
    </Wrapper>
  );
};

export default Gamer;
