// import { Button } from '@material-ui/core';
// import { FC } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Header';

// export const Header: FC = () => {
//   const style = styles();

//   return (
//     <div className={style.header}>
//       <div className={style.leftHead}>
//         <Link to="/coinflip"> coinflip </Link>
//         <Link to="/jackpot"> jackpot </Link>
//       </div>
//       <div className={style.rightHead}>
//         <Link to="/fairness"> fairness </Link>
//         <Link to="/support"> support </Link>
//         <Link to="/faq"> faq </Link>
//         <Link to="/terms"> terms </Link>
//         <Button> ENG </Button>
//         <Button> Sound </Button>
//         <Button> LOGIN </Button>
//       </div>
//     </div>
//   );
// };

import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            But
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
