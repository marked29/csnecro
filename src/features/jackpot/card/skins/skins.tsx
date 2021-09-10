import { FC } from 'react';

import Wrapper from '../../../../shared/components/wrapper/wrapper.component';
import Button from '../../../../shared/components/button/button.component';

import style from './skins.module.sass';
import { Skin } from '.';

const skinsList = ['$255.00', '200$', '50$', '29$', '220$', '210$', '90$'].map(
  (deposit, index) => ({
    name: `skin ${index}${1}`,
    deposit,
    avatar: '/img/avatarBig.png',
  })
);

type SkinsProps = {};

const Skins: FC<SkinsProps> = () => {
  return (
    <Wrapper paddingSize="md" className={style.root}>
      <div className={style.bet}>
        <div className={style.what}>
          <span>
            betted <p>skins</p>
          </span>
        </div>
        <div className={style.skins}>
          {skinsList.map((skin) => (
            <Skin {...skin} className={style.skin} />
          ))}
        </div>
        <Button size="lg">Deposit</Button>
      </div>
    </Wrapper>
  );
};
export default Skins;
