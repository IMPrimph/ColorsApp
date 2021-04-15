import React, { Component } from 'react';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Link } from 'react-router-dom'
import { withStyles } from "@material-ui/core/styles";


const drawerWidth = 300;
const styles = theme => ({
    root: {
        display: 'flex'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: "row",
        justifyContent: 'space-between',
        height: '64px'
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    navBtns: {

    }
})

class PaletteFormNav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newPaletteName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
            return this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        });
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        const { classes, open } = this.props;
        const { newPaletteName } = this.state;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    color="default"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.props.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Create A Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                        <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
                            <span>
                                <TextValidator
                                    value={this.state.newPaletteName}
                                    label="Palette Name"
                                    name="newPaletteName"
                                    onChange={this.handleChange}
                                    autoComplete="off"
                                    validators={["required", "isPaletteNameUnique"]}
                                    errorMessages={["Enter palette name", "Name already taken"]}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit">
                                    Save Palette
                                </Button>
                            </span>
                        </ValidatorForm>
                        <Link to="/">
                            <Button variant="contained" color="secondary">Go Back</Button>
                        </Link>
                    </div>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav)