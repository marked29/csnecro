import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    padding: '0',
    color: theme.palette.text.secondary,
    height: '100%',
  },
}));

export default useStyles;
