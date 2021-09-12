import { FC } from 'react';

import Wrapper from '../../../../shared/components/wrapper/wrapper.component';
import Gamer from './gamer/gamer.component';

import style from './gamers.module.sass';

const userList = ['User 1', 'User 2', 'User 3', 'User 4'];

const Gamers: FC = () => {
  return (
    <Wrapper paddingSize="md" className={style.gamer_surface}>
      {userList.map((name) => {
        return <Gamer userName={name} />;
      })}
    </Wrapper>
  );
};
export default Gamers;
