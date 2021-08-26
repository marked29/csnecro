import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    height: '60px',
    backgroundColor: '#22242b',
  },
  content: {
    width: '95%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rights: {
    fontFamily: 'Lato, sans-serif',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '14px',
    color: `#696969`,
  },
  links: {
    display: 'flex',
    fontFamily: 'Lato, sans-serif',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '14px',
    color: `#696969`,
  },
  img: {
    width: '20px',
    height: '20px',
    padding: '7px',
  },
}));

export default useStyles;
