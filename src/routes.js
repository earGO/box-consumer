import React from 'react'
import {Helmet} from 'react-helmet'
import {ConnectedRouter} from 'connected-react-router'
import {Route, Switch} from 'react-router-dom'
import {name as appName} from '../package.json'
import {Layout} from './Layout'
import Nsi from './LazyLoad/Nsi'

const routes = [
  {
    key: 'backendMain',
    path: '/',
    exact: true,
    component: Nsi
  }
]

function Routes({history}) {
  return (
    <React.Fragment>
      <Helmet>
        <title>{appName}</title>
      </Helmet>
      <ConnectedRouter history={history}>
        <Layout>
          <React.Suspense fallback={<div>Loading</div>}>
            <Switch>
              {routes.map(route => (
                <Route {...route} />
              ))}
            </Switch>
          </React.Suspense>
        </Layout>
      </ConnectedRouter>
    </React.Fragment>
  )
}

export default Routes
