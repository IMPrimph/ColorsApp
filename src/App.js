import React, { Component } from 'react'
import Palette from './Palette'
import seedColors from './seedColors'
import { generatePalette } from "./colorHelper"
import { Route, Switch } from 'react-router-dom'
import PaletteList from './PaletteList'

class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
        <Route
          exact
          path='/palette/:id'
          render={(routeProps) => (
            <Palette palette={generatePalette(
              this.findPalette(routeProps.match.params.id)
            )} />
          )} />
      </Switch>

      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;