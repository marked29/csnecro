import { FC, useState } from 'react';

import { IconButton } from '../../shared/components/icon-button';
import Minus from '../../shared/svg/minus';
import Plus from '../../shared/svg/plus';

import style from './faq.module.sass';

const Faq: FC = () => {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <div className={style.root}>
      <div className={style.tabTitle}>
        <h2>TEXT TAB TITLE H2</h2>
        <span className={style.textTab}>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. <br />
          <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. <br />
          <br /> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. <br />
          <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
        <p />
      </div>
      <ul className={style.listOfText}>
        <li className={openDetails ? style.openedList : ''}>
          <p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              {openDetails ? (
                <IconButton className={style.icon}>
                  <Minus action={() => setOpenDetails(!openDetails)} />
                </IconButton>
              ) : (
                <IconButton className={style.icon}>
                  <Plus action={() => setOpenDetails(!openDetails)} />
                </IconButton>
              )}
            </span>
          </p>
          {openDetails && (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          )}
        </li>
        <li>
          <p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              <IconButton className={style.icon}>
                <Plus />
              </IconButton>
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing{' '}
              <IconButton className={style.icon}>
                <Plus />
              </IconButton>
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing{' '}
              <IconButton className={style.icon}>
                <Plus />
              </IconButton>
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing{' '}
              <IconButton className={style.icon}>
                <Plus />
              </IconButton>
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing{' '}
              <IconButton className={style.icon}>
                <Plus />
              </IconButton>
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Faq;
