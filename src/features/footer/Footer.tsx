import { FC } from 'react';
import style from './Footer.module.sass';
import facebook from '../../public/images/facebook.png';
import instagram from '../../public/images/instagram.png';
import twitter from '../../public/images/twitter.png';

const Footer: FC = () => {
  return (
    <footer>
      <div className={style.footer}>
        <div className={style.content}>
          <div>
            <small className={style.rights}>
              Copyright &copy; 2019 - 2020 proplayer.com. All rights reserved.
            </small>
          </div>
          <div className={style.links}>
            <p>Our socials:</p>
            <img src={facebook} alt="" className={style.socialLogo} />
            <img src={instagram} alt="" className={style.socialLogo} />
            <img src={twitter} alt="" className={style.socialLogo} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
