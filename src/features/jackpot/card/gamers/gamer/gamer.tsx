import { FC, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import ReactTooltip from 'react-tooltip';
import cn from 'classnames';

import Wrapper from '../../../../../shared/components/wrapper/wrapper.component';
import Button from '../../../../../shared/components/button/button.component';
import { Skin } from '../../skins';
import type { GamerEntity } from '../../../../../app/domain/gamer';

import style from './gamer.module.sass';
import { ClickOutsideListener } from '../../../../../shared/components/click-outside-listener/ClickOutsideListener';

type GamerProps = {
  className?: string;
} & GamerEntity;

const SkinsSurface: FC<{
  skins: GamerEntity['skins'];
  parent: HTMLDivElement;
}> = ({ skins, parent }) => {
  const { height, left } = parent.getBoundingClientRect();

  const carouselDims = document
    .getElementsByClassName('alice-carousel')[0]
    .getBoundingClientRect();

  const position = {
    top: height,
    left: left - carouselDims.left,
  };

  return createPortal(
    <div className={style.skins} style={position}>
      {skins.map((skin) => (
        <Skin {...skin} className={style.skin} />
      ))}
    </div>,
    document.getElementsByClassName('alice-carousel')[0] as Element
  );
};

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
      {isSkinsShown && !!gamerRef.current && (
        <ClickOutsideListener
          onClickOutside={() => {
            setIsSkinsShown(false);
          }}
        >
          <SkinsSurface parent={gamerRef.current} skins={skins} />
        </ClickOutsideListener>
      )}
    </Wrapper>
  );
};

export default Gamer;
