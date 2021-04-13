import React from 'react';
import { withStyles } from '@material-ui/styles'
import styles from './styles/MiniPaletteStyles'

function Minipalette(props) {
    const { classes, paletteName, emoji, colors, handleClick } = props;
    const miniColorBoxes = colors.map(color => (
        <div
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
        />
    ));
    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.colors}>{miniColorBoxes}</div>
            <div className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></div>
        </div>
    )
}

export default withStyles(styles)(Minipalette)
