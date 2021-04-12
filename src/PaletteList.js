import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Minipalette from './MiniPalette';
import { withStyles } from '@material-ui/styles'

class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        return (
            <div>
                <Minipalette />
                <h1>React Colors</h1>
                {palettes.map(palette => (
                    // <p>
                    //     <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
                    // </p>
                    <Minipalette {...palette} />
                ))}
            </div>
        );
    }
}

export default PaletteList;