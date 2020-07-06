import React from 'react';
import Store from './redux/store';
import { createBrowserHistory } from "history";
import { Container, Row, Col } from 'reactstrap';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect, Router } from 'react-router-dom'
import layoutRoutes from './Routes/index'
import './App.css';


function App() {
  const history = createBrowserHistory();
  return (
    <Container fluid>
      <Row>
        <Col md={{ size: 10, offset: 1 }}>
          <Provider store={Store}>
            <Router history={history}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/users" />}
                />
                {layoutRoutes.map((prop, key) => {
                  return (
                    <Route
                      exact
                      path={prop.path}
                      component={prop.component}
                      key={key}
                      history={history}
                    />
                  );
                })}
              </Switch>
            </Router>
          </Provider>
        </Col>
      </Row>

    </Container>
  );
}

export default App
