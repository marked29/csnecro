import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
          <Button
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/coinflip"> coinflip </Link>
          </Button>
          <Button
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/jackpot"> jackpot </Link>
          </Button>

          <Typography variant="h6" className={classes.title}>
            <Link to="/fairness"> fairness </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/support"> support </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/faq"> faq </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/terms"> terms </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            ENG
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Sound
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
