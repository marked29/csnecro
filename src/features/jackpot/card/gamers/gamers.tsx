import { FC } from 'react';
import cn from 'classnames';

import AliceCarousel from 'react-alice-carousel';
import Gamer from './gamer/gamer';

import style from './gamers.module.sass';

const createSkins = (deposits: string[]) =>
  deposits.map((deposit, index) => ({
    name: `skin ${index}${1}`,
    deposit,
    avatar: '/img/avatarBig.png',
  }));

const MOCK_GAMERS = [
  {
    id: 1,
    userName: 'User name',
    lvl: 13,
    deposit: '30.09$',
    percentage: '11.3%',
    skins: createSkins(['255$', '200$', '50$', '29$', '220$', '210$', '90$']),
  },
  {
    id: 2,
    userName: 'Josh Snow',
    lvl: 99,
    deposit: '100.09$',
    percentage: '43%',
    skins: createSkins(['255$', '90$']),
  },
  {
    id: 3,
    userName: 'Lorem Ipsum',
    lvl: 1,
    deposit: '1.01$',
    percentage: '2.3%',
    skins: createSkins(['29$', '220$', '210$', '90$']),
  },
  {
    id: 4,
    userName: 'User',
    lvl: 13,
    deposit: '4.09$',
    percentage: '3.21%',
    skins: createSkins(['255$', '29$', '220$', '210$', '90$']),
  },
  {
    id: 5,
    userName: 'User',
    lvl: 13,
    deposit: '4.09$',
    percentage: '3.21%',
    skins: createSkins(['255$', '29$', '220$', '210$', '90$']),
  },
  {
    id: 6,
    userName: 'User',
    lvl: 13,
    deposit: '4.09$',
    percentage: '3.21%',
    skins: createSkins(['255$', '29$', '220$', '210$', '90$']),
  },
  {
    id: 7,
    userName: 'User',
    lvl: 13,
    deposit: '4.09$',
    percentage: '3.21%',
    skins: createSkins(['255$', '29$', '220$', '210$', '90$']),
  },
];

const Gamers: FC = () => {
  const gamersList = MOCK_GAMERS.map((gamer) => (
    <Gamer className={cn()} key={gamer.id} {...gamer} />
  ));

  const responsive = {
    0: { items: 1 },
    578: { items: 3 },
  };

  return (
    <div className={style.root}>
      <AliceCarousel
        disableDotsControls
        mouseTracking
        touchTracking
        autoWidth
        responsive={responsive}
      >
        {gamersList}
      </AliceCarousel>
    </div>
  );
};
export default Gamers;
