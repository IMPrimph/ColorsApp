import { DRAWER_WIDTH } from '../constants'
import sizes from './sizes'

const drawerWidth = DRAWER_WIDTH; const styles = theme => ({
    root: {
        display: 'flex',
        overflow: 'none',
        [sizes.down("md")]: {
            overflow: 'auto'
        },
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        display: 'flex',
        alignItems: 'center'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        height: 'calc(100vh - 64px)',
        padding: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    container: {
        width: "90%",
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2px',
        overflow: 'auto',
        "&::-webkit-scrollbar": {
            display: 'none'
        }
    },
    buttons: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        width: '100%',
        margin: '5px'
    },
    header: {
        fontSize: '1.7rem',
        fontWeight: '500'
    }
});

export default styles