import React, { Component } from 'react'
import Palette from './Palette'
import seedColors from './seedColors'
import { generatePalette } from "./colorHelper"
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Palette List Goes Here</h1>} />
        <Route exact path='/palette/:id' render={() => <h1>Individual Palette</h1>} />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;