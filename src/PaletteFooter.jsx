import { withStyles } from '@material-ui/styles'
import styles from './styles/PaletteFooterStyles'

function PaletteFooter(props) {
    const { paletteName, emoji, classes } = props;
    return (
        <div className={classes.PaletteFooter}>
            <footer className={classes.PaletteFooter}>
                <span className={classes.copy}>Copyright © 2021</span>
            </footer>

            <footer >
                {paletteName}
                <span className={classes.emoji}>{emoji}</span>
            </footer>
        </div>
    )
}

export default withStyles(styles)(PaletteFooter)
