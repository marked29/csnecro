import { FC } from 'react';

import Wrapper from '../../shared/components/wrapper/wrapper.component';
import Facebook from '../../shared/svg/facebook';
import Instagram from '../../shared/svg/instagram';
import Twitter from '../../shared/svg/twitter';

const Footer: FC = () => {
  return (
    <footer>
      <Wrapper>
        <p>Copyright © 2019 - 2020 proplayer.com. All rights reserved.</p>
        <div>
          Our socials:
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
