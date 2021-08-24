import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <div>
      <ul>
        <Link to="/coinflip"> coinflip </Link>
        <Link to="/jackpot"> jackpot </Link>
        <Link to="/faq"> faq </Link>
      </ul>
    </div>
  );
};
