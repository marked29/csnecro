import { FC } from 'react';

import Wrapper from '../../shared/components/wrapper/wrapper.component';
import RuleCard from './rulesCard/rulesCard';

import style from './faq.module.sass';

const Faq: FC = () => {
  return (
    <div className={style.root}>
      <h2 className={style.header}>TEXT TAB TITLE H2 </h2>
      <Wrapper paddingSize="lg" className={style.wrapper}>
        <p className={style.main}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul className={style.rules}>
          <li className={style.rule}>
            <RuleCard />
          </li>
          <li className={style.rule}>
            <RuleCard />
          </li>
          <li className={style.rule}>
            <RuleCard />
          </li>
        </ul>
      </Wrapper>
    </div>
  );
};

export default Faq;
