import { FC } from 'react';

import Wrapper from '../../../../shared/components/wrapper/wrapper.component';
import Gamer from './gamer';

import style from './gamers.module.sass';

const MOCK_GAMERS = [
  {
    userName: 'User name',
    lvl: 13,
    deposit: '30.09$',
    percentage: '11.3%',
  },
  {
    userName: 'Josh Snow',
    lvl: 99,
    deposit: '100.09$',
    percentage: '43%',
  },
  {
    userName: 'Lorem Ipsum',
    lvl: 1,
    deposit: '1.01$',
    percentage: '2.3%',
  },
  {
    userName: 'User',
    lvl: 13,
    deposit: '4.09$',
    percentage: '3.21%',
  },
];

const Gamers: FC = () => {
  return (
    <Wrapper paddingSize="md" className={style.root}>
      {MOCK_GAMERS.map((gamer) => (
        <Gamer key={gamer.userName} {...gamer} />
      ))}
    </Wrapper>
  );
};
export default Gamers;
