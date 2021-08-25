import { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Route, BrowserRouter } from 'react-router-dom';
import { Routes } from './app/shared/constants/Routes';
import useStyles from './App.styles';
import Header from './features/header/Header';

export const App: FC = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className="App">
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item container direction="column" spacing={1} xs={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>Chat</Paper>
              </Grid>
            </Grid>

            <Grid item container xs={9}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Header />
                </Paper>
              </Grid>

              <Grid item xs={12}>
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
          </Grid>
        </div>
      </div>
    </BrowserRouter>
  );
};
