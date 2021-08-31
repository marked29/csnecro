import { FC } from 'react';

import Wrapper from '../../../../shared/components/wrapper/wrapper.component';
import Button from '../../../../shared/components/button/button.component';
import style from './skins.module.sass';

const skinsList = ['255', '200', '50', '29', '220', '210', '90'];
type SkinsProps = {
  skin?: object;
};

const Skins: FC<SkinsProps> = () => {
  return (
    <Wrapper biggerPadding className={style.betted_skins}>
      <div className={style.bet}>
        <div className={style.what}>
          betted <br /> skins
        </div>
        <div className={style.skins}>
          {skinsList.map((skin) => (
            <div className={style.skin} key={skin}>
              <img src="/img/avatarBig.png" alt="avatar" />
              <br />
              {skin}
            </div>
          ))}
        </div>
        <Button size="lg">Show skins</Button>
      </div>
    </Wrapper>
  );
};
export default Skins;
