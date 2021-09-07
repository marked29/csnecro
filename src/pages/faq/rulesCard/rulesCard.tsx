import { FC } from 'react';

import Wrapper from '../../../shared/components/wrapper/wrapper.component';

// import { IconButton } from '../../shared/components/icon-button';

// import Minus from '../../shared/svg/minus';
// import Plus from '../../shared/svg/plus';

import style from './rulesCard.module.sass';

const ruleCard: FC = () => {
  return (
    <div className={style.root}>
      <Wrapper paddingSize="md" className={style.wrapper}>
        <h2 className={style.header}>
          Lorem ipsum dolor sit amet, consectetur adipisicing{' '}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.{' '}
        </p>
      </Wrapper>
    </div>
  );
};

export default ruleCard;
