import { FC } from 'react';

import Wrapper from '../../../../shared/components/wrapper/wrapper.component';
import Button from '../../../../shared/components/button/button.component';

import style from './skins.module.sass';

const skinsList = ['255$', '200$', '50$', '29$', '220$', '210$', '90$'];

type SkinsProps = {
  skin?: object;
};

const Skins: FC<SkinsProps> = () => {
  return (
    <Wrapper biggerPadding className={style.betted_skins}>
      <div className={style.bet}>
        <div className={style.what}>
          <span>
            betted <p>skins</p>
          </span>
        </div>
        <div className={style.skins}>
          {skinsList.map((skin) => (
            <div className={style.skin} key={skin}>
              <img
                src="/img/avatarBig.png"
                alt="avatar"
                className={style.skinImg}
              />
              <br />
              <p className={style.deposit}>{skin}</p>
            </div>
          ))}
        </div>
        <Button size="lg">Deposit</Button>
      </div>
    </Wrapper>
  );
};
export default Skins;
