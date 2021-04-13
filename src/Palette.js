import React, { Component } from 'react';
import ColorBox from './ColorBox';
import 'rc-slider/assets/index.css';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter'
import { withStyles } from '@material-ui/styles'
import './Palette.css'
import styles from "./styles/PaletteStyles"



class Palette extends Component {
    constructor(props) {
        super(props)

        this.state = {
            level: 500,
            format: 'hex'
        }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }

    changeLevel(level) {
        this.setState({ level })
    }

    changeFormat(val) {
        this.setState({ format: val })
    }

    render() {
        const { colors, paletteName, emoji, id } = this.props.palette
        const { classes } = this.props;
        const { level, format } = this.state
        const colorBoxes = colors[level].map(color => (
            <ColorBox
                background={color[format]}
                name={color.name}
                key={color.id}
                id={color.id}
                paletteId={id}
                showingFullPalette
            />
        ))
        return (
            <div className={classes.Palette}>
                <Navbar
                    level={level}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                    showingAllColors={true}
                />
                <div className={classes.colors}>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
                {/* <footer className="Palette-footer">
                    {paletteName}
                    <span className={emoji}>{emoji}</span>
                </footer> */}
            </div>
        );
    }
}

export default withStyles(styles)(Palette)