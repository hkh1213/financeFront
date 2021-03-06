import React                    from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect }              from 'react-redux'

import { Grid } from '@material-ui/core'

import Nav      from './components/nav/Nav'
import Guide    from './components/guide/Guide'
import Search   from './components/search/Search'
import Analyzer from './components/analyzer/Analyzer'
import TVChartContainer from './components/TVChartContainer/index'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Grid container spacing={1}>
                    <Grid item xs={4} md={3}>
                        <Nav />
                    </Grid>
                    <Grid item xs={8} md={9}>
                        <Route path="/"                     component={Guide} exact></Route>
                        <Route path="/chart"                component={TVChartContainer} exact></Route>
                        <Route path="/guide"                component={Guide}></Route>
                        <Route path="/search"               component={Search}></Route>
                        <Route path="/analyze/:corpCode"    component={Analyzer}></Route>
                        <Route path='/home' component={() => { 
      window.location.href = 'http://15.165.104.146:80/'; 
      return null;
 }}/>
                    </Grid>
                </Grid>
            </BrowserRouter>
        );
    }
}

export default connect()(App)

