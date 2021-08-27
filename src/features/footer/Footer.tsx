import { FC } from 'react';
import useStyles from './Footer.styles';
import facebook from '../../public/images/facebook.png';
import instagram from '../../public/images/instagram.png';
import twitter from '../../public/images/twitter.png';

const Footer: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.rights}>
          <p>Copyright © 2019 - 2020 proplayer.com. All rights reserved.</p>
        </div>
        <div className={classes.links}>
          <p>Our socials:</p>
          <img src={facebook} alt="" className={classes.img} />
          <img src={instagram} alt="" className={classes.img} />
          <img src={twitter} alt="" className={classes.img} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
