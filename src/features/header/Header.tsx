import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../app/shared/constants/Routes';

export const Header: FC = () => {
  return (
    <div>
      <ul>
        <Link to={Routes.COINFLIP}> coinflip </Link>
        <Link to={Routes.JACKPOT}> jackpot </Link>
        <Link to={Routes.FAQ}> faq </Link>
      </ul>
    </div>
  );
};
