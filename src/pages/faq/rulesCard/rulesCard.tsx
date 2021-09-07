import cn from 'classnames';
import { FC, useState } from 'react';

import Wrapper from '../../../shared/components/wrapper/wrapper.component';
import { IconButton } from '../../../shared/components/icon-button';

import Plus from '../../../shared/svg/plus';
import Minus from '../../../shared/svg/minus';

import style from './rulesCard.module.sass';

const RuleCard: FC = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const compoundClassName = cn(style.root, { [style.active]: openDetails });

  return (
    <div className={compoundClassName}>
      <Wrapper paddingSize="md" className={style.wrapper}>
        <h5 className={style.header}>
          Lorem ipsum dolor sit amet, consectetur adipisicing{' '}
          <IconButton
            onClick={() => {
              setOpenDetails(!openDetails);
            }}
          >
            {openDetails ? <Minus /> : <Plus />}
          </IconButton>
        </h5>
        {openDetails && (
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{' '}
          </p>
        )}
      </Wrapper>
    </div>
  );
};

export default RuleCard;
