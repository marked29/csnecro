import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: '100%',
  },
}));

export default styles;
