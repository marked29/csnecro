import { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Route, BrowserRouter } from 'react-router-dom';
import { Header } from './features/header/Header';
import { Routes } from './app/shared/constants/Routes';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    border: '1px solid gray',
  },
}));

export const App: FC = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className="App">
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Header />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>Chat</Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paper}>
                <Route
                  path={Routes.JACKPOT}
                  component={() => <div>Jackpot</div>}
                />
                <Route path={Routes.FAQ} component={() => <div>Faq</div>} />
                <Route
                  path={Routes.COINFLIP}
                  component={() => <div>Coinflip</div>}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>Footer</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </BrowserRouter>
  );
};
