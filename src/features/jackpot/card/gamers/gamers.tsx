import { FC } from 'react';

import Wrapper from '../../../../shared/components/wrapper/wrapper.component';
import Gamer from './gamer';

import style from './gamers.module.sass';

const createSkins = (deposits: string[]) =>
  deposits.map((deposit, index) => ({
    name: `skin ${index}${1}`,
    deposit,
    avatar: '/img/avatarBig.png',
  }));

const MOCK_GAMERS = [
  {
    userName: 'User name',
    lvl: 13,
    deposit: '30.09$',
    percentage: '11.3%',
    skins: createSkins(['255$', '200$', '50$', '29$', '220$', '210$', '90$']),
  },
  {
    userName: 'Josh Snow',
    lvl: 99,
    deposit: '100.09$',
    percentage: '43%',
    skins: createSkins(['255$', '90$']),
  },
  {
    userName: 'Lorem Ipsum',
    lvl: 1,
    deposit: '1.01$',
    percentage: '2.3%',
    skins: createSkins(['29$', '220$', '210$', '90$']),
  },
  {
    userName: 'User',
    lvl: 13,
    deposit: '4.09$',
    percentage: '3.21%',
    skins: createSkins(['255$', '29$', '220$', '210$', '90$']),
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
